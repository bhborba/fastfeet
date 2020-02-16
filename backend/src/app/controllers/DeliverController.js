import * as Yup from 'yup';
import { Op } from 'sequelize';
import Package from '../models/Package';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';
import Notification from '../schemas/Notification';

import NewPackageMail from '../jobs/NewPackageMail';
import Queue from '../../lib/Queue';

class DeliverController {
  // listagem de encomendas não entregues nem canceladas
  async index(req, res) {
    const pack = await Package.findAll({
      where: {
        deliveryman_id: req.params.id,
        canceled_at: null,
        end_date: null,
      },
      attributes: ['id', 'product', 'recipient_id', 'start_date'],
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

    const deliveryman = await Deliveryman.findByPk(deliveryman_id, {
      attributes: ['name', 'email'],
    });

    const recipient = await Recipient.findByPk(recipient_id, {
      attributes: ['name', 'street', 'number', 'state', 'city', 'zip'],
    });

    await Queue.add(NewPackageMail.key, {
      deliveryman,
      recipient,
      product,
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

  // cancelamento de encomenda
  async delete(req, res) {
    // procura na base a encomenda com o id passado na url
    const pack = await Package.findByPk(req.params.id);

    // avalia se a encomenda já foi cancelada
    if (pack.canceled_at) {
      return res.status(400).json({ error: 'Package already canceled' });
    }

    // define a data de cancelamento
    pack.canceled_at = new Date();

    await pack.save();

    // notificar novo entregador
    await Notification.create({
      content: `Sua entrega de ${pack.product} foi cancelada`,
      deliveryman: pack.deliveryman_id,
    });

    return res.json(pack);
  }
}

export default new DeliverController();
