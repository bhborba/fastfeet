// para validações
import * as Yup from 'yup';
import { Op } from 'sequelize';
import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const { q } = req.query;
    let where = {};

    if (q) {
      where = {
        name: { [Op.like]: `%${q}%` },
      };
    } else {
      where = {
        active: true,
      };
    }

    const recipients = await Recipient.findAll({
      where,
      attributes: [
        'id',
        'name',
        'street',
        'number',
        'complement',
        'state',
        'city',
        'zip',
      ],
    });
    return res.json(recipients);
  }

  // cadastro de usuário
  async store(req, res) {
    // define como devem ser os dados informados
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip: Yup.string().required(),
    });

    //  verifica se os dados não estão de acordo com o requisito definido
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // cria o destinatario na base, e pega id, nome, rua, cep e estado
    const { id, name, street, number, zip, state } = await Recipient.create(
      req.body
    );

    // retorna os dados do usuário criado
    return res.json({
      id,
      name,
      street,
      number,
      zip,
      state,
    });
  }

  // update de destinatario
  async update(req, res) {
    // define como devem ser os dados informados
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip: Yup.string().required(),
    });

    //  verifica se os dados não estão de acordo com o requisito definido
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // procura na base de dados o usuário que deve ser editado
    const recipient = await Recipient.findByPk(req.params.id);

    // atualiza os dados na base
    const { id, name, street, number, zip, state } = await recipient.update(
      req.body
    );

    // retorna os novos dados do usuário
    return res.json({
      id,
      name,
      street,
      number,
      zip,
      state,
    });
  }

  // cancelamento de encomenda
  async delete(req, res) {
    // procura na base de dados o usuário que deve ser editado
    const recipient = await Recipient.findByPk(req.params.id);

    // define o entregador como inativo no app
    recipient.active = false;

    await recipient.save();

    return res.json(recipient);
  }
}

export default new RecipientController();
