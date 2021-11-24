import { Router, Request, Response, NextFunction } from 'express';

import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateAccountController } from './controllers/CreateAccountController';

const routes = Router();

routes.use((_: Request, response: Response, next: NextFunction) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,PATCH'
  );
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  response.header('Access-Control-Expose-Headers', 'x-total-count');

  return next();
});

routes.post('/sign-in', new AuthenticateUserController().handle);
routes.post('/sign-up', new CreateAccountController().handle);

export { routes };
