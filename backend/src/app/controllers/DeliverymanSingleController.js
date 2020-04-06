// para validações
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanSingleController {
  // listagem de entregadores
  async index(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id, {
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(deliveryman);
  }
}

export default new DeliverymanSingleController();
