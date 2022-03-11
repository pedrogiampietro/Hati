import { Request, Response } from 'express';

import { getTokenFromHeaders } from '../helpers/Jwt';
import { ChangePasswordService } from '../services/ChangePasswordService';

class ChangePasswordController {
  async handle(request: Request, response: Response) {
    const { password } = request.body;
    const token = getTokenFromHeaders(request.headers);

    const service = new ChangePasswordService();

    const result = await service.execute({
      password,
      token,
    });

    return response.json(result);
  }
}

export { ChangePasswordController };
