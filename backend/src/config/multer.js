import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    // define o destino do upload
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      // funcao para gerar um nome aleatório para a imagem
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);
        // caso não tenha dado erro, retorna o nome random + extensão do arquivo
        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
