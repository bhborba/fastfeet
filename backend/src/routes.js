import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionContoller';
import FileController from './app/controllers/FileController';
import RecipientController from './app/controllers/RecipientController';
import Deliveryman from './app/controllers/DeliverymanController';
import PackageController from './app/controllers/PackageController';
import NotificationController from './app/controllers/NotificationController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// notificacoes
// listagem
routes.get('/notifications/:id', NotificationController.index);

// rotas que só irão funcionar com o token de autenticação
routes.use(authMiddleware);

// entregadores
// listagem
routes.get('/deliverymans', Deliveryman.index);
// cadastro
routes.post('/deliverymans', Deliveryman.store);
// atualização
routes.put('/deliverymans/:id', Deliveryman.update);
// remoção
routes.delete('/deliverymans/:id', Deliveryman.delete);

// rota de upload de arquivos
routes.post('/files', upload.single('file'), FileController.store);

routes.put('/users', UserController.update);

// destinatarios
// cadastro
routes.post('/recipient', RecipientController.store);
// atualização
routes.put('/recipient', RecipientController.update);

// encomendas
// listagem
routes.get('/packages', PackageController.index);
// cadastro
routes.post('/packages', PackageController.store);
// atualização
routes.put('/packages/:id', PackageController.update);
// cancelamento
routes.delete('/packages/:id', PackageController.delete);

export default routes;
