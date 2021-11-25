import crypto from 'crypto';
import prismaClient from '../prisma';

import { AppError } from '../shared/errors/AppError';
import { createAccountSchema } from '../validations/CreateAccountSchema';
import { ICreateAccountDTO } from '../dtos/ICreateAccountDTO';

type IRequest = Omit<ICreateAccountDTO, 'id'>;

class CreateAccountService {
  async execute(data: IRequest) {
    const schema = createAccountSchema();

    await schema.validate(data, { abortEarly: false });

    const passwordHash = crypto
      .createHash('sha1')
      .update(data.password)
      .digest('hex');

    const accountAlreadyExists = await prismaClient.accounts.findUnique({
      where: {
        name: data.name,
      },
    });

    if (accountAlreadyExists) {
      throw new AppError({
        message: 'Esse usuário já existe no nosso sistema.',
      });
    }

    const emailAlreadyExists = await prismaClient.accounts.findUnique({
      where: {
        email: data.email,
      },
    });

    if (emailAlreadyExists) {
      throw new AppError({
        message: 'Esse usuário já existe no nosso sistema.',
      });
    }

    const successfulyCreateAccount = await prismaClient.accounts.create({
      data: {
        name: data.name,
        password: passwordHash,
        email: data.email,
        create_ip: data.create_ip,
      },
    });

    return successfulyCreateAccount;
  }
}

export { CreateAccountService };
