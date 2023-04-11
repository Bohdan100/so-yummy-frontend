import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { selectIsLoading } from 'redux/Auth/authSelectors';
import { register } from 'redux/Auth/authOperations';
import {
  registerValidationSchema,
  ErrorStatus,
  getPassErrorStatus,
} from '../../helpers';
import { useAuth } from '../../hooks';
import { setError } from '../../redux/Auth/authSlice';

import {
  UserIconStyled,
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
} from './RegisterForm.styled';

const RegisterForm = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const { error } = useAuth();

  useEffect(() => {
    if (error !== null) {
      setTimeout(() => {
        dispatch(setError(null));
      }, 5000);
    }
  }, [dispatch, error]);

  const handleSubmitForm = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password })).then(
      res => !res.error && resetForm()
    );
  };

  const statusIcon = {
    valid: <CheckIconStyled />,
    inValid: <ErrorIconStyled />,
    notSecure: <PassWarnIconStyled />,
  };

  const passStatusIcon = {
    valid: <PassValidIconStyled />,
    inValid: <PassErrorIconStyled />,
    notSecure: <PassWarnIconStyled />,
  };

  return (
    <Container>
      <GoogleLink to="http://localhost:8000/api/auth/google">
        <GoogleIcon />
      </GoogleLink>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmitForm}
        validationSchema={registerValidationSchema}
        validateOnBlur
      >
        {({ errors, touched, isValid, dirty }) => (
          <StyledForm>
            <TitleContainer>
              <Title>Registration</Title>
              {error && <ErrorBox>{ErrorStatus[error]}</ErrorBox>}
            </TitleContainer>
            <InputContainer>
              <Label htmlFor="name">
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  disabled={isLoading}
                  color={touched.name && getPassErrorStatus(errors.name, dirty)}
                />
                <UserIconStyled
                  color={touched.name && getPassErrorStatus(errors.name, dirty)}
                />
                {touched.name &&
                  statusIcon[getPassErrorStatus(errors.name, dirty)]}
                {errors.name && touched.name ? (
                  <StatusBox>{errors.name}</StatusBox>
                ) : null}
              </Label>
              <Label htmlFor="email">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
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
                  placeholder="Password"
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
                    (errors.password || 'Password is secure')}
                </StatusBox>
              </Label>
            </InputContainer>
            <Button
              type="submit"
              name="button"
              disabled={isLoading || !isValid || !dirty}
            >
              Sign up
            </Button>
            <StyledLink to="/signin">Sign In</StyledLink>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};

export default RegisterForm;
