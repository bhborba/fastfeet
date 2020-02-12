import * as Yup from 'yup';
import Package from '../models/Package';
import File from '../models/File';
import Recipient from '../models/Recipient';
import Notification from '../schemas/Notification';
import Deliveryman from '../models/Deliveryman';

class PackageController {
  // listagem de encomendas
  async index(req, res) {
    const pack = await Package.findAll({
      where: { id: req.body.id },
      attributes: [
        'id',
        'product',
        'recipient_id',
        'deliveryman_id',
        'signature_id',
        'start_date',
        'end_date',
        'canceled_at',
      ],
      include: [
        {
          model: File,
          as: 'signature',
          attributes: ['name', 'path', 'url'],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name'],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name'],
        },
      ],
    });

    return res.json(pack);
  }

  // cadastro de encomendas
  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // pega dados enviados pela requisição
    const { recipient_id, deliveryman_id, product } = req.body;

    const pack = await Package.create({
      recipient_id,
      deliveryman_id,
      product,
    });

    // notificar entregador
    await Notification.create({
      content: `Nova entrega de ${product} disponivel para retirada`,
      deliveryman: deliveryman_id,
    });

    return res.json(pack);
  }

  // update de encomendas
  async update(req, res) {
    // define como devem ser os dados informados
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
      signature_id: Yup.number(),
      start_date: Yup.date(),
      end_date: Yup.date(),
      canceled_at: Yup.date(),
    });

    //  verifica se os dados não estão de acordo com o requisito definido
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // procura na base de dados a encomenda que deve ser editada
    const pack = await Package.findByPk(req.params.id);

    const { deliveryman_id, product } = req.body;

    // valida se houve mudança no entregador
    if (deliveryman_id && deliveryman_id !== pack.deliveryman_id) {
      // notificar entregador atual
      await Notification.create({
        content: `Sua entrega de ${pack.product} foi remanejada`,
        deliveryman: pack.deliveryman_id,
      });

      // notificar novo entregador
      await Notification.create({
        content: `Nova entrega de ${product} disponivel para retirada`,
        deliveryman: deliveryman_id,
      });
    }

    // atualiza os dados na base
    const {
      recipient_id,
      signature_id,
      start_date,
      end_date,
      canceled_at,
    } = await pack.update(req.body);

    // retorna os novos dados da encomenda
    return res.json({
      recipient_id,
      deliveryman_id,
      product,
      signature_id,
      start_date,
      end_date,
      canceled_at,
    });
  }
}

export default new PackageController();
