import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionContoller';
import FileController from './app/controllers/FileController';
import RecipientController from './app/controllers/RecipientController';
import Deliveryman from './app/controllers/DeliverymanController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// rotas que só irão funcionar com o token de autenticação
routes.use(authMiddleware);

routes.post('/recipient', RecipientController.store);
routes.post('/deliveryman', Deliveryman.store);
// rota de upload de arquivos
routes.post('/files', upload.single('file'), FileController.store);

routes.put('/users', UserController.update);
routes.put('/recipient', RecipientController.update);

export default routes;
