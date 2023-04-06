import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { selectIsLoading } from 'redux/Auth/authSelectors';
import { login } from 'redux/Auth/authOperations';
import { fetchProducts } from 'redux/ShoppingList/shoppingListOperations';
import { loginValidationSchema } from '../../helpers';

import { EmailIconStyled, LockIconStyled } from '../../components/AuthIcons';

import {
  Container,
  Label,
  Input,
  StyledForm,
  Title,
  InputContainer,
  Button,
  StyledLink,
  ErrorBox,
} from './SigninForm.styled';

const SigninForm = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleSubmitForm = async ({ email, password }, { resetForm }) => {
   await dispatch(login({ email, password })).then(res =>
      res.error ? console.log(res.payload) : resetForm()
    );
    await dispatch(fetchProducts()).then(res =>
      res.error ? console.log(res.payload) : resetForm()
    );
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
            <Title>Sign In</Title>
            <InputContainer>
              <Label htmlFor="email">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  disabled={isLoading}
                />
                <EmailIconStyled />
                {errors.email && touched.email ? (
                  <ErrorBox>{errors.email}</ErrorBox>
                ) : null}
              </Label>
              <Label htmlFor="password">
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  disabled={false}
                />
                <LockIconStyled />
                {errors.password && touched.password ? (
                  <ErrorBox>{errors.password}</ErrorBox>
                ) : null}
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
