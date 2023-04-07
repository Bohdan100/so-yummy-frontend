import * as yup from 'yup';

const messages = {
  name: 'The name must contain only letters, spaces and dashes',
  email: 'Is not valid email. The email must be for example: email@example.com',
};

const regExp = {
  name: /^([a-zA-Z-]\s?)*$/,
  email: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
};

export const registerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Required')
    .min(2, 'Too Short! Min 2 symbols!')
    .max(30, 'Too Long! Max 30 symbols!')
    .matches(regExp.name, messages.name),
  email: yup.string().required('Required').email(messages.email, regExp.email),
  password: yup
    .string()
    .required('Required')
    .min(6, 'Too Short! Min 6 symbols!')
    .max(10, 'Too Long! Max 10 symbols!'),
});

export const loginValidationSchema = yup.object().shape({
  email: yup.string().required('Required').email(messages.email, regExp.email),
  password: yup
    .string()
    .required('Required')
    .min(6, 'Too Short! Min 6 symbols!')
    .max(10, 'Too Long! Max 10 symbols!'),
});

