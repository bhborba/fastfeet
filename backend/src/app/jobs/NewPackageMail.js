import Mail from '../../lib/Mail';

class NewPackageMail {
  get key() {
    return 'NewPackageMail';
  }

  async handle({ data }) {
    const { deliveryman, recipient, product } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Nova encomenda disponível para retirada',
      template: 'newPackage',
      context: {
        deliveryman: deliveryman.name,
        product,
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

export default new NewPackageMail();
