// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { selectIsLoading } from 'redux/Auth/authSelectors';
// import { Button } from 'components/Button/Button';
// import { register, login } from 'redux/Auth/authOperations';
import { registerValidationSchema } from '../../helpers';

import {
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
} from './SigninForm.styled';

const SigninForm = () => {
  //   const [isShowPassword, setIsShowPassword] = useState(false);
  //   const isLoading = useSelector(selectIsLoading);
  //   const dispatch = useDispatch();
  //   const { pathname } = useLocation();

  const handleSubmitForm = ({ email, password }, { resetForm }) => {
    // dispatch(register({ name, email, password })).then(res =>
    // res.error ? toast.error(ErrorStatus[res.payload]) : resetForm());
    console.log(email, password);
  };


  return (
    <Container>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmitForm}
        validationSchema={registerValidationSchema}
        validateOnBlur
      >
        {({ errors, touched }) => (
          <StyledForm>
            <Title>Sign In</Title>
            <InputContainer>
              <Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  disabled={false}
                />
                <EmailIconStyled />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </Label>
              <Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  disabled={false}
                />
                <LockIconStyled />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
              </Label>
            </InputContainer>
            <Button type="submit" name="button">
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