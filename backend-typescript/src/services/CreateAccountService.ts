import crypto from 'crypto';
import prismaClient from '../prisma';

import { AppError } from '../shared/errors/AppError';
import { createAccountSchema } from '../validations/CreateAccountSchema';
import { ICreateAccountDTO } from '../dtos/ICreateAccountDTO';
import { prisma } from '.prisma/client';

type IRequest = Omit<ICreateAccountDTO, 'accounts'>;

class CreateAccountService {
  async execute(data: IRequest) {
    const schema = createAccountSchema();

    await schema.validate(data, { abortEarly: false });

    const passwordHash = crypto
      .createHash('sha1')
      .update(data.password)
      .digest('hex');

    const accountAlreadyExists = await prismaClient.accounts.findUnique({
      where: {},
    });

    if (accountAlreadyExists) {
      throw new AppError({ message: 'Este usuário já existe' });
    }

    const successfulyCreateAccount = await prismaClient.accounts.create({
      data: {
        name: data.name,
        password: passwordHash,
        secret: '',
        type: 1,
        premdays: 0,
        coins: 0,
        lastday: 0,
        email: data.email,
        jwtVersion: 0,
        vote: 0,
        key: '0',
        email_new: '',
        rlname: '',
        location: '',
        page_access: 0,
        email_code: '0',
        next_email: 0,
        premium_points: 0,
        secret_status: false,
        create_ip: 0,
        last_post: 0,
        flag: '0',
        vip_time: 0,
        guild_points: 0,
        guild_points_stats: 0,
        passed: 0,
        block: 0,
        refresh: 0,
        birth_date: '0',
        gender: '0',
        profileName: '0',
        passwordResetToken: '0',
        avatar: '0',
        loyalty_points: 0,
        authToken: '0',
        player_sell_bank: 0,
        tournamentBalance: 0,
        tokens: 0,
      },
    });

    return successfulyCreateAccount;
  }
}

export { CreateAccountService };
