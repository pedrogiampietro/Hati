import * as yup from 'yup';

export const signInSchema = () =>
  yup.object().shape({
    name: yup.string().min(5).max(15).required('Please enter a account name.'),
    password: yup.string().required('Password is required.'),
  });
