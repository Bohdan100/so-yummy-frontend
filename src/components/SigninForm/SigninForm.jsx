import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { selectIsLoading } from 'redux/Auth/authSelectors';
import { login } from 'redux/Auth/authOperations';
import { fetchProducts } from 'redux/ShoppingList/shoppingListOperations';
import {
  loginValidationSchema,
  ErrorStatus,
  ErrorMessages,
} from '../../helpers';
import { useAuth } from '../../hooks';
import { setError } from '../../redux/Auth/authSlice';

import {
  EmailIconStyled,
  LockIconStyled,
  ErrorIconStyled,
  WarnIconStyled,
  CheckIconStyled,
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
} from './SigninForm.styled';

const SigninForm = () => {
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

  const handleSubmitForm = async ({ email, password }, { resetForm }) => {
    await dispatch(login({ email, password })).then(
      res => !res.error && resetForm()
    );
    await dispatch(fetchProducts()).then(res => !res.error && resetForm());
  };

  const getPassErrorStatus = (error, dirty) => {
    if (!error && dirty) {
      return 'valid';
    }
    if (!error && !dirty) {
      return 'normal';
    } else if (error === ErrorMessages.password) {
      return 'notSecure';
    } else if (error !== ErrorMessages.password) {
      return 'inValid';
    }
  };

  const statusIcon = {
    valid: <CheckIconStyled />,
    inValid: <ErrorIconStyled />,
    notSecure: <WarnIconStyled />,
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
              <Title>Sign In</Title>
              {error && <ErrorBox>{ErrorStatus[error]}</ErrorBox>}
            </TitleContainer>
            <InputContainer>
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
                  type="password"
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
                {touched.password &&
                  statusIcon[getPassErrorStatus(errors.password, dirty)]}
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
              Sign In
            </Button>
            <StyledLink to="/register">Registration</StyledLink>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};

export default SigninForm;
