// para validações
import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  // cadastro de usuário
  async store(req, res) {
    // define como devem ser os dados informados
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    //  verifica se os dados não estão de acordo com o requisito definido
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // procura por um usuário que possua o mesmo e-mail informado na requisição
    const userExists = await User.findOne({ where: { email: req.body.email } });

    // se a constante for preenchida, retorna erro dizendo que já existe
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // cria o usuário na base, e pega id, nome e email
    const { id, name, email } = await User.create(req.body);

    // retorna os dados do usuário criado
    return res.json({
      id,
      name,
      email,
    });
  }

  // update de usuário
  async update(req, res) {
    // define como devem ser os dados informados
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      OldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    //  verifica se os dados não estão de acordo com o requisito definido
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // pega email e senha antiga enviados pela requisição
    const { email, oldPassword } = req.body;

    // procura na base de dados o usuário que deve ser editado
    const user = await User.findByPk(req.userId);

    /*
     * caso a alteração seja no email, refaz a verificação para garantir
     * que o e-mail não seja duplicado
     */
    if (email && email !== user.email) {
      const userExists = await User.findOne({ where: { email } });
      // se o email já existir na base de dados, retorna erro
      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    // verifica se a senha antiga é informada, e se é igual a armazenada na base
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      // se a senha não for igual, retorna erro
      return res.status(401).json({ error: 'Password does not match' });
    }

    // atualiza os dados na base
    const { id, name } = await user.update(req.body);

    // retorna os novos dados do usuário
    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();
