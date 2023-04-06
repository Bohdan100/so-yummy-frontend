import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { selectIsLoading } from 'redux/Auth/authSelectors';
import { register } from 'redux/Auth/authOperations';
import { fetchProducts } from 'redux/ShoppingList/shoppingListOperations';
import { registerValidationSchema } from '../../helpers';

import {
  UserIconStyled,
  EmailIconStyled,
  LockIconStyled,
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
  ErrorBox,
} from './RegisterForm.styled';

const RegisterForm = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleSubmitForm = async ({ name, email, password }, { resetForm }) => {
    await dispatch(register({ name, email, password })).then(res =>
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
        validationSchema={registerValidationSchema}
        validateOnBlur
      >
        {({ errors, touched, isValid, dirty }) => (
          <StyledForm>
            <Title>Registration</Title>
            <InputContainer>
              <Label htmlFor="name">
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  disabled={isLoading}
                />
                <UserIconStyled />
                {errors.name && touched.name ? (
                  <ErrorBox>{errors.name}</ErrorBox>
                ) : null}
              </Label>
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
                  disabled={isLoading}
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
