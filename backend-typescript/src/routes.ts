import { Router, Request, Response, NextFunction } from 'express';

import { checkJwt } from './middlewares/ensureAuthenticated';

import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateAccountController } from './controllers/CreateAccountController';
import { ChangePasswordController } from './controllers/ChangePasswordController';

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
routes.post(
  '/change-password',
  checkJwt,
  new ChangePasswordController().handle
);

export { routes };
