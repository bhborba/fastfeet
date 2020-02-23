import Mail from '../../lib/Mail';

class DeliveryProblemMail {
  get key() {
    return 'DeliveryProblemMail';
  }

  async handle({ data }) {
    const { deliveryman, recipient, pack, problem } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Sua entrega foi cancelada',
      template: 'deliveryProblem',
      context: {
        deliveryman: deliveryman.name,
        product: pack.product,
        problem: problem.description,
        recipient: recipient.name,
        street: recipient.street,
        number: recipient.number,
        zip: recipient.zip,
        city: recipient.city,
        state: recipient.state,
      },
    });
  }
}

export default new DeliveryProblemMail();
