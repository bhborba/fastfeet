// para validações
import * as Yup from 'yup';

import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  // listagem de entregadores
  async index(req, res) {
    const deliverymans = await Deliveryman.findAll({
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(deliverymans);
  }

  // cadastro de entregadores
  async store(req, res) {
    // define como devem ser os dados informados
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    //  verifica se os dados não estão de acordo com o requisito definido
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // procura por entregador que possua o mesmo e-mail informado na requisição
    const deliverymanExists = await Deliveryman.findOne({
      where: { email: req.body.email },
    });

    // se a constante for preenchida, retorna erro dizendo que já existe
    if (deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman already exists' });
    }

    // cria o usuário na base, e pega id, nome e email
    const { id, name, email } = await Deliveryman.create(req.body);

    // retorna os dados do usuário criado
    return res.json({
      id,
      name,
      email,
    });
  }

  // update de entregador
  async update(req, res) {
    // define como devem ser os dados informados
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
    });

    //  verifica se os dados não estão de acordo com o requisito definido
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // pega email e senha antiga enviados pela requisição
    const { email } = req.body;

    // procura na base de dados o usuário que deve ser editado
    const deliveryman = await Deliveryman.findByPk(req.deliverymanId);

    /*
     * caso a alteração seja no email, refaz a verificação para garantir
     * que o e-mail não seja duplicado
     */
    if (email && email !== deliveryman.email) {
      const deliverymanExists = await Deliveryman.findOne({ where: { email } });
      // se o email já existir na base de dados, retorna erro
      if (deliverymanExists) {
        return res.status(400).json({ error: 'Deliveryman already exists' });
      }
    }

    // atualiza os dados na base
    const { id, name } = await deliveryman.update(req.body);

    // retorna os novos dados do entregador
    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new DeliverymanController();
