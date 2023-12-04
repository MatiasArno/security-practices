import { Router } from 'express';
import handle405Error from '../middlewares/wrong-method-handler';
import validateUserCredentials from '../middlewares/credentials-validator';
import UserController from '../controllers/user';
import ServerController from '../controllers/server';

const mainRouter = Router();

mainRouter.get('/status', ServerController.getStatus);

mainRouter.get('/users', UserController.getAll);
mainRouter.post('/users', validateUserCredentials, UserController.saveNew);
mainRouter.post('/login', validateUserCredentials, UserController.login);

mainRouter.all('/status', handle405Error);
mainRouter.all('/users', handle405Error);
mainRouter.all('/login', handle405Error);

export default mainRouter;
