import { verifyJwt } from '../helpers/Jwt';

import { Request, Response, NextFunction } from 'express';
import { AppError } from '../shared/errors/AppError';

export function checkJwt(
  request: Request,
  response: Response,
  next: NextFunction
) {
  let token = request.headers['authorization'];
  token = token ? token.slice(7, token.length) : undefined;

  if (!token) {
    throw new AppError({
      message: 'Token inválido.',
    });
  }

  try {
    const decoded = verifyJwt(token);

    console.log(decoded);

    next();
  } catch (error) {
    throw new AppError({
      message: error,
    });
  }
}
