import encrypt from 'js-sha1';
import prismaClient from '../prisma';
import { AppError } from '../shared/errors/AppError';
import { generateJwt, generateRefreshJwt } from '../helpers/Jwt';

interface ILogin {
  name: string;
  password: string;
}

interface IResponse {
  token: string;
  refreshToken: string;
}

class AuthenticateUserService {
  async execute({ name, password }: ILogin): Promise<IResponse> {
    const encryptedPassword = encrypt(password);

    const findAccount = await prismaClient.accounts.findFirst({
      where: {
        name,
        password: encryptedPassword,
      },
    });

    if (!findAccount) {
      throw new AppError({
        message: `Usuário e/ou Senha inválidos`,
      });
    }

    const token = generateJwt({ id: findAccount.id });
    const refreshToken = generateRefreshJwt({
      id: findAccount.id,
      version: findAccount.jwtVersion,
    });

    const authenticateReturn: IResponse = {
      token,
      refreshToken,
    };

    return authenticateReturn;
  }
}

export { AuthenticateUserService };
