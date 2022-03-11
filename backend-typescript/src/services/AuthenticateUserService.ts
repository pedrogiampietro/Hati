import encrypt from 'js-sha1';
import prismaClient from '../prisma';

import { generateJwt, generateRefreshJwt } from '../helpers/Jwt';
import { AppError } from '../shared/errors/AppError';

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
      },
    });

    if (!findAccount) {
      throw new AppError({
        message: 'Usuário não encontrado no nosso sistema.',
      });
    }

    if (findAccount.password !== encryptedPassword) {
      throw new AppError({
        message: 'Conta de e-mail ou password não é válido.',
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
