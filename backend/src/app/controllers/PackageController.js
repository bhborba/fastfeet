import * as Yup from 'yup';
import Package from '../models/Package';
import File from '../models/File';
import Recipient from '../models/Recipient';
import Notification from '../schemas/Notification';
import Deliveryman from '../models/Deliveryman';

class PackageController {
  // listagem de entregadores
  async index(req, res) {
    const deliverymans = await Package.findAll({
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

    return res.json(deliverymans);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

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
}

export default new PackageController();
