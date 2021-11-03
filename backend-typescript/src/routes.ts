import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';

const router = Router();

router.get('/', (request, response) => {
  return response.json('OK!');
});

router.post('/sign-in', new AuthenticateUserController().handle);

export { router };
