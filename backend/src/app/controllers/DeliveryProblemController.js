import * as Yup from 'yup';
import Package from '../models/Package';
import DeliveryProblem from '../models/DeliveryProblem';

import Recipient from '../models/Recipient';
import Notification from '../schemas/Notification';
import Deliveryman from '../models/Deliveryman';

import DeliveryProblemMail from '../jobs/DeliveryProblemMail';
import Queue from '../../lib/Queue';

class DeliveryProblemController {
  // listagem de encomendas com problemas
  async index(req, res) {
    const problem = await DeliveryProblem.findAll({
      attributes: [
        'id',
        'description',
        'delivery_id',
        'created_at',
        'updated_at',
      ],
      include: [
        {
          model: Package,
          as: 'delivery',
          attributes: [
            'id',
            'product',
            'recipient_id',
            'deliveryman_id',
            'start_date',
            'canceled_at',
          ],
        },
      ],
    });

    return res.json(problem);
  }

  async specific(req, res) {
    const problem = await DeliveryProblem.findAll({
      where: { delivery_id: req.params.id },
      attributes: [
        'id',
        'description',
        'delivery_id',
        'created_at',
        'updated_at',
      ],
      include: [
        {
          model: Package,
          as: 'delivery',
          attributes: [
            'id',
            'product',
            'recipient_id',
            'deliveryman_id',
            'start_date',
            'canceled_at',
          ],
        },
      ],
    });

    return res.json(problem);
  }

  // cadastro de problemas
  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // pega dados enviados
    const { description } = req.body;
    const delivery_id = req.params.id;

    // cria na base
    const problem = await DeliveryProblem.create({
      description,
      delivery_id,
    });

    return res.json(problem);
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

  // cancelamento de entrega
  async delete(req, res) {
    // procura na base a encomenda com o id passado na url
    const problem = await DeliveryProblem.findByPk(req.params.id);
    const pack = await Package.findByPk(problem.delivery_id);

    // avalia se a encomenda já foi cancelada
    if (pack.canceled_at) {
      return res.status(400).json({ error: 'Package already canceled' });
    }

    // avalia se encomenda já foi entregue
    if (pack.end_date) {
      return res
        .status(400)
        .json({ error: 'This package has been delivered already' });
    }

    // define a data de cancelamento
    pack.canceled_at = new Date();

    await pack.save();

    // notificar novo entregador
    await Notification.create({
      content: `Sua entrega de ${pack.product} foi cancelada pelo seguinte motivo: ${problem.description}`,
      deliveryman: pack.deliveryman_id,
    });

    const deliveryman = await Deliveryman.findByPk(pack.deliveryman_id, {
      attributes: ['name', 'email'],
    });

    const recipient = await Recipient.findByPk(pack.recipient_id, {
      attributes: ['name', 'street', 'number', 'state', 'city', 'zip'],
    });

    await Queue.add(DeliveryProblemMail.key, {
      problem,
      pack,
      deliveryman,
      recipient,
    });

    return res.json(problem);
  }
}

export default new DeliveryProblemController();
