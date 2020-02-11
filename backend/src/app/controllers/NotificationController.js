import Notification from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    const notifications = await Notification.find({
      deliveryman: req.params.id,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);
    return res.json(notifications);
  }
}

export default new NotificationController();
