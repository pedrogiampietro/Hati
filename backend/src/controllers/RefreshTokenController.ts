import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { RefreshTokenService } from '../services/RefreshTokenService';
import { HttpStatus } from '../shared/enumns/httpStatus';

class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const token =
      request.body.token ||
      request.query.token ||
      request.headers['x-access-token'];

    const service = container.resolve(RefreshTokenService);
    const { token: newToken, refresh_token } = await service.execute(token);

    return response.status(HttpStatus.created).json({
      token: newToken,
      refresh_token,
    });
  }
}

export { RefreshTokenController };
