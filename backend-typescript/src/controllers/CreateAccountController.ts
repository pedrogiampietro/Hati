import { Request, Response } from 'express';
import { CreateAccountService } from '../services/CreateAccountService';

class CreateAccountController {
  async handle(request: Request, response: Response) {
    const { name, password, email } = request.body;

    const service = new CreateAccountService();
    const newDate = new Date();

    try {
      const result = await service.execute({
        name,
        password,
        email,
        coins: 0,
        creation: newDate,
        create_date: newDate,
        create_ip: '127.0.0.1',
        createdAt: newDate,
        updatedAt: newDate,
        jwtVersion: 0,
        lastday: 0,
        page_access: 0,
        premdays: 365,
        premium_points: 0,
        type: 0,
      });

      return response.json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { CreateAccountController };
