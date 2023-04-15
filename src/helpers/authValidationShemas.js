import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

export const useErrorMessages = () => {
  const { t } = useTranslation();
  return {
    ErrorMessages: {
      name: t('auth.error.name'),
      email: t('auth.error.email'),
      password: t('auth.error.password'),
    },
  };
};

export const useValidation = () => {
  const { t } = useTranslation();
  const regExp = {
    name: /^([0-9a-zA-Zа-яёА-ЯЁЇїЄєҐґ]\s?)*$/,
    email: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
    password: /^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*)$/,
  };

  const { ErrorMessages } = useErrorMessages();

  return {
    registerValidationSchema: yup.object().shape({
      name: yup
        .string()
        .required(t('auth.error.required'))
        .min(2, t('auth.error.short', { value: 2 }))
        .max(30, t('auth.error.long', { value: 30 }))
        .matches(regExp.name, ErrorMessages.name),
      email: yup
        .string()
        .required(t('auth.error.required'))
        .email(ErrorMessages.email, regExp.email),
      password: yup
        .string()
        .required(t('auth.error.required'))
        .min(6, t('auth.error.short', { value: 6 }))
        .matches(regExp.password, ErrorMessages.password),
    }),
    loginValidationSchema: yup.object().shape({
      email: yup
        .string()
        .required(t('auth.error.required'))
        .email(ErrorMessages.email, regExp.email),
      password: yup
        .string()
        .required(t('auth.error.required'))
        .min(6, t('auth.error.short', { value: 6 }))
        .matches(regExp.password, ErrorMessages.password),
    }),
  };
};
