import * as yup from 'yup';

export const createAccountSchema = () =>
  yup.object().shape({
    name: yup.string().min(5).max(15).required('Please enter a account name.'),
    password: yup.string().required('Password is required.'),
    password_confirmation: yup
      .string()
      .required('Passwords must be the same.')
      .oneOf([null, yup.ref('password')], 'Passwords must be the same.'),
    email: yup
      .string()
      .required('E-mail is required')
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

        'You need to enter a valid email address required.'
      ),
  });
