import * as yup from 'yup';

export const ErrorMessages = {
  name: 'The name must contain only letters, spaces and dashes',
  email: 'Is not valid email. The email must be for example: email@example.com',
  password: 'Your password is weak. The password must contain at least one uppercase letter, one lowercase letter and one number'
};

const regExp = {
  name: /^([0-9a-zA-Zа-яёА-ЯЁЇїЄєҐґ]\s?)*$/,
  email: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
  password: /^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*)$/,
};

export const registerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Required')
    .min(2, 'Too Short! Min 2 symbols!')
    .max(30, 'Too Long! Max 30 symbols!')
    .matches(regExp.name, ErrorMessages.name),
  email: yup.string().required('Required').email(ErrorMessages.email, regExp.email),
  password: yup
    .string()
    .required('Required')
    .min(6, 'Too Short! Min 6 symbols!')
    .matches(regExp.password, ErrorMessages.password),
});

export const loginValidationSchema = yup.object().shape({
  email: yup.string().required('Required').email(ErrorMessages.email, regExp.email),
  password: yup
    .string()
    .required('Required')
    .min(6, 'Too Short! Min 6 symbols!')
    .matches(regExp.password, ErrorMessages.password),
});

