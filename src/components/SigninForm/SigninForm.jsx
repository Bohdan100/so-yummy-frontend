import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { selectIsLoading } from 'redux/Auth/authSelectors';
import { login } from 'redux/Auth/authOperations';
import { fetchProducts } from 'redux/ShoppingList/shoppingListOperations';
import { useValidation, useErrorStatus } from '../../helpers';
import { useAuth } from '../../hooks';
import { setError } from '../../redux/Auth/authSlice';

import {
  EmailIconStyled,
  LockIconStyled,
  ErrorIconStyled,
  CheckIconStyled,
  PassWarnIconStyled,
  PassErrorIconStyled,
  PassValidIconStyled,
} from '../../components/AuthIcons';

import {
  Container,
  Label,
  Input,
  StyledForm,
  Title,
  InputContainer,
  Button,
  StyledLink,
  StatusBox,
  ErrorBox,
  TitleContainer,
  ShowPasswordBtn,
  PassIconBox,
  GoogleIcon,
  GoogleLink,
} from './SigninForm.styled';

const SigninForm = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const { error } = useAuth();
  const { ErrorStatus, getPassErrorStatus } = useErrorStatus();
  const { loginValidationSchema } = useValidation();
  const { t } = useTranslation();

  useEffect(() => {
    if (error !== null) {
      setTimeout(() => {
        dispatch(setError(null));
      }, 5000);
    }
  }, [dispatch, error]);

  const handleSubmitForm = ({ email, password }, { resetForm }) => {
    dispatch(login({ email, password })).then(res => {
      if (!res.error) {
        dispatch(fetchProducts());
        resetForm();
      }
    });
  };

  const statusIcon = {
    valid: <CheckIconStyled />,
    inValid: <ErrorIconStyled />,
  };

  const passStatusIcon = {
    valid: <PassValidIconStyled />,
    inValid: <PassErrorIconStyled />,
    notSecure: <PassWarnIconStyled />,
  };

  return (
    <Container>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmitForm}
        validationSchema={loginValidationSchema}
        validateOnBlur
      >
        {({ errors, touched, isValid, dirty }) => (
          <StyledForm>
            <TitleContainer>
              <Title>{t('auth.title.login')}</Title>
              {error && <ErrorBox>{ErrorStatus[error]}</ErrorBox>}
            </TitleContainer>
            <InputContainer>
              <Label htmlFor="email">
                <Input
                  type="email"
                  name="email"
                  placeholder={t('auth.form.email')}
                  disabled={isLoading}
                  color={
                    touched.email && getPassErrorStatus(errors.email, dirty)
                  }
                />
                <EmailIconStyled
                  color={
                    touched.email && getPassErrorStatus(errors.email, dirty)
                  }
                />
                {touched.email &&
                  statusIcon[getPassErrorStatus(errors.email, dirty)]}
                {errors.email && touched.email ? (
                  <StatusBox>{errors.email}</StatusBox>
                ) : null}
              </Label>
              <Label htmlFor="password">
                <Input
                  type={isShowPassword ? 'text' : 'password'}
                  name="password"
                  placeholder={t('auth.form.password')}
                  disabled={isLoading}
                  color={
                    touched.password &&
                    getPassErrorStatus(errors.password, dirty)
                  }
                />
                <LockIconStyled
                  color={
                    touched.password &&
                    getPassErrorStatus(errors.password, dirty)
                  }
                />
                <PassIconBox>
                  <ShowPasswordBtn
                    type="button"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  >
                    {isShowPassword ? (
                      <AiOutlineEye size="24px" />
                    ) : (
                      <AiOutlineEyeInvisible size="24px" />
                    )}
                  </ShowPasswordBtn>
                  {touched.password &&
                    passStatusIcon[getPassErrorStatus(errors.password, dirty)]}
                </PassIconBox>
                <StatusBox
                  color={
                    touched.password &&
                    getPassErrorStatus(errors.password, dirty)
                  }
                >
                  {((dirty && touched.password) ||
                    (!dirty && touched.password && errors.password)) &&
                    (errors.password || t('auth.status.secure'))}
                </StatusBox>
              </Label>
            </InputContainer>
            <GoogleLink to="https://so-yummy-98ev.onrender.com/api/auth/google">
              <GoogleIcon />
            </GoogleLink>
            <Button
              type="submit"
              name="button"
              disabled={isLoading || !isValid || !dirty}
            >
              {t('auth.form.button.login')}
            </Button>
            <StyledLink to="/register">
              {t('auth.form.link.register')}
            </StyledLink>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};

export default SigninForm;
