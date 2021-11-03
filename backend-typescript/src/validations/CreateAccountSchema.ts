import * as yup from 'yup';

export function createAccountSchema() {
  const schema = yup.object().shape({
    name: yup.string().min(6).max(30).required('Account Name é obrigatório'),
    password: yup.string().min(6).max(30).required('Password é obrigatório'),
    password_confirmation: yup
      .string()
      .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
    email: yup.string().required('E-mail é obrigatório'),
  });

  return schema;
}
