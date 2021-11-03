import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateAccountController } from './controllers/CreateAccountController';

const router = Router();

router.get('/', (request, response) => {
  return response.json('OK!');
});

router.post('/sign-in', new AuthenticateUserController().handle);
router.post('/sign-up', new CreateAccountController().handle);

export { router };
