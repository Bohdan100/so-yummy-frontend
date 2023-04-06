import * as yup from 'yup';

const messages = {
  name: 'The name must contain only letters, spaces and dashes',
  phone:
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  email: 'Is not valid email. The email must be for example: email@example.com',
  shortName:
    "So short?! It's okay, we won't tell anyone about this. But let's make the name a little longer",
  longName: 'Wow!!! Who are you warrior?!?! Max 30 symbols!',
};

const regExp = {
  name: /^([a-zA-Z-]\s?)*$/,
  phone: /^\+?[0-9]{0,3}?\s?\(?[0-9]{0,3}?\)?[0-9\s?\-?]*$/,
  email: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
};

export const registerValidationSchema = yup.object().shape({
  email: yup.string().required('Required').email(messages.email, regExp.email),
  password: yup
    .string()
    .required('Required')
    .min(6, 'Too Short! Min 6 symbols!')
    .max(10, 'Too Long! Max 10 symbols!'),
  name: yup
    .string()
    .required('Required')
    .min(2, messages.shortName)
    .max(30, messages.longName),
});

export const loginValidationSchema = yup.object().shape({
  email: yup.string().required('Required').email(messages.email, regExp.email),
  password: yup
    .string()
    .required('Required')
    .min(6, 'Too Short! Min 6 symbols!')
    .max(10, 'Too Long! Max 10 symbols!'),
});

export const contactValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Required')
    .min(2, 'Too Short! Min 2 symbols!')
    .max(30, 'Too Long! Max 30 symbols!')
    .matches(regExp.name, messages.name),
  phone: yup
    .string()
    .required('Required')
    .min(10, 'Too Short! Min 10 symbols!')
    .max(20, 'Too Long! Max 20 symbols!')
    .matches(regExp.phone, messages.phone),
});
