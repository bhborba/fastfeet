import * as Yup from 'yup';
import { Op } from 'sequelize';
import { startOfDay, endOfDay } from 'date-fns';
import Package from '../models/Package';
import Recipient from '../models/Recipient';
import File from '../models/File';

class DeliverController {
  // listagem de encomendas não entregues nem canceladas
  async index(req, res) {
    const pack = await Package.findAll({
      where: {
        deliveryman_id: req.params.id,
        canceled_at: null,
        end_date: null,
      },
      attributes: ['id', 'product', 'recipient_id', 'start_date', 'created_at'],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name', 'street', 'number', 'zip', 'city', 'state'],
        },
      ],
    });

    return res.json(pack);
  }

  // listagem de encomendas já entregues
  async delivered(req, res) {
    const pack = await Package.findAll({
      where: {
        deliveryman_id: req.params.id,
        end_date: {
          [Op.not]: null,
        },
      },
      attributes: [
        'id',
        'product',
        'recipient_id',
        'start_date',
        'end_date',
        'signature_id',
        'created_at',
      ],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name', 'street', 'number', 'zip', 'city', 'state'],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(pack);
  }

  // update de encomendas
  async start(req, res) {
    // procura na base de dados a encomenda que deve ser editada
    const pack = await Package.findByPk(req.params.packageid);

    /* valida se o entregador que está editando a encomenda é o mesmo para
    o qual a encomenda está registrada */
    if (pack.deliveryman_id != req.params.id) {
      return res
        .status(403)
        .json({ error: 'The deliveryman of this package is not you' });
    }

    // pega horário de início e fim do dia atual
    const dateStart = startOfDay(new Date());
    const dateEnd = endOfDay(new Date());

    // pega a quantidade de encomendas retiradas pelo entregador para o dia de hoje
    const deliveries = await Package.count({
      where: {
        deliveryman_id: req.params.id,
        start_date: {
          [Op.between]: [dateStart, dateEnd],
        },
      },
    });

    // se a quantidade for maior do que 5, retorna erro
    if (deliveries === 5) {
      return res
        .status(403)
        .json({ error: 'You cant pick more than 5 deliveries per day' });
    }

    pack.start_date = new Date().toJSON();

    // atualiza os dados na base
    await pack.save();

    // retorna os novos dados da encomenda
    return res.json(pack);
  }

  // entrega de encomenda
  async end(req, res) {
    // define como devem ser os dados informados
    const schema = Yup.object().shape({
      signature_id: Yup.number(),
    });

    //  verifica se os dados não estão de acordo com o requisito definido
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // procura na base a encomenda com o id passado na url
    const pack = await Package.findByPk(req.params.packageid);

    // avalia se a encomenda já foi entregue
    if (pack.end_date) {
      return res.status(400).json({ error: 'Package already delivered' });
    }

    // define a data de entrega
    pack.end_date = new Date().toJSON();

    /* caso seja associado um arquivo com a assinatura da entrega,
     envia o id da imagem */
    if (req.body.signature_id) {
      pack.signature_id = req.body.signature_id;
    }

    await pack.save();

    return res.json(pack);
  }
}

export default new DeliverController();
