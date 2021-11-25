import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { name, password } = request.body;

    const service = new AuthenticateUserService();

    const result = await service.execute({
      name,
      password,
    });

    return response.json(result);
  }
}

export { AuthenticateUserController };
