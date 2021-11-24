import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { ValidationError } from 'yup';

import { AppError } from './AppError';

interface IValidationsErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof ValidationError) {
    let errors: IValidationsErrors = {};

    error.inner.forEach(err => {
      errors[err.path] = err.errors;
    });

    return response.status(400).json({
      error: true,
      message: errors,
    });
  }

  if (error instanceof AppError) {
    return response.status(error.objectError.status_code).json({
      error: true,
      code: error.objectError.code,
      message: error.objectError.message,
    });
  }

  return response.status(500).json({
    error: true,
    message: `Internal server error - ${error.message}`,
  });
};

export { errorHandler };
