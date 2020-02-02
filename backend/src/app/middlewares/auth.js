import jwt from 'jsonwebtoken';

// pega informação de call back e transforma em async/await
import { promisify } from 'util';

// importação para pegar o secret
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  // pega o token do header authorization
  const authHeader = req.headers.authorization;

  // se o token não for informado, retorna erro
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  // pega o token passado pelo auth header
  const [, token] = authHeader.split(' ');

  try {
    // para decifrar o token de acordo com o secret no authConfig
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    // pega o id do usuário
    req.userId = decoded.id;

    // se conseguiu decifrar, continua o acesso ao controller
    return next();
  } catch (err) {
    // se o token for inválido, retorna erro
    return res.status(401).json({ error: 'Invalid token' });
  }
};
