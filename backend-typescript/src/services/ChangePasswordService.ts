import prismaClient from '../prisma';

interface IChangePassword {
  password: string;
  token: string;
}

class ChangePasswordService {
  async execute({ password, token }: IChangePassword) {
    console.log(token);
  }
}

export { ChangePasswordService };
