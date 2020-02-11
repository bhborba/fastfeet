import * as Yup from 'yup';
import Package from '../models/Package';
import Notification from '../schemas/Notification';

class PackageController {
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
