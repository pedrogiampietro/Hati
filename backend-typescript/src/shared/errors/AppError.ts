interface IObjectError {
  message: string;
  code?: string;
  status_code?: number;
}

class AppError {
  public readonly objectError: IObjectError;

  constructor({ message, code, status_code = 400 }: IObjectError) {
    this.objectError = {
      message,
      code,
      status_code,
    };
  }
}

export { AppError };
