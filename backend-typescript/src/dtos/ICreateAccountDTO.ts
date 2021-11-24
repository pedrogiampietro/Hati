interface ICreateAccountDTO {
  id?: number;
  name: string;
  password: string;
  email: string;
  create_ip: string;
}

export { ICreateAccountDTO };
