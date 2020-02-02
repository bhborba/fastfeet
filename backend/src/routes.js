import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionContoller';

import authMiddleware from './app/middlewares/auth';
import RecipientController from './app/controllers/RecipientController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// rotas que só irão funcionar com o token de autenticação
routes.use(authMiddleware);

routes.post('/recipient', RecipientController.store);

routes.put('/users', UserController.update);
routes.put('/recipient', RecipientController.update);

export default routes;
