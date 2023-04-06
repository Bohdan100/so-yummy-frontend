// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { selectIsLoading } from 'redux/Auth/authSelectors';
// import { Button } from 'components/Button/Button';
// import { register, login } from 'redux/Auth/authOperations';
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
} from './RegisterForm.styled';

const RegisterForm = () => {
  //   const [isShowPassword, setIsShowPassword] = useState(false);
  //   const isLoading = useSelector(selectIsLoading);
  //   const dispatch = useDispatch();
  //   const { pathname } = useLocation();

  const handleSubmitForm = ({ name, email, password }, { resetForm }) => {
    // dispatch(register({ name, email, password })).then(res =>
    // res.error ? toast.error(ErrorStatus[res.payload]) : resetForm());
    console.log(name, email, password);
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
            <Title>Registration</Title>
            <InputContainer>
              <Label>
                <Input type="text" name="name" placeholder="Name" />
                <UserIconStyled />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
              </Label>
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

// return (
//     <Formik
//       initialValues={{ name: '', email: '', password: '' }}
//       onSubmit={handleSubmitForm}
//     //   validationSchema={
//     //     pathname === '/register'
//     //       ? registerValidationSchema
//     //       : loginValidationSchema
//     //   }
//     //   validateOnBlur
//     >
//       {({ errors, touched, isValid, dirty }) => (
//         <StyledForm>
//             <Label htmlFor="name">
//               Name
//               <Input type="text" name="name" />
//               {errors.name && touched.name ? (
//                 <div>
//                   {errors.name}
//                 </div>
//               ) : null}
//             </Label>
//           <Label htmlFor="email">
//             Email
//             <Input type="email" name="email" disabled={false} />
//             {errors.email && touched.email ? (
//               <div>{errors.email}</div>
//             ) : null}
//           </Label>
//           <Label htmlFor="password">
//             Password
//             <Input
//               type={isShowPassword ? 'text' : 'password'}
//               name="password"
//               disabled={false}
//             />
//             <ShowPasswordBtn
//               type="button"
//               onClick={() => setIsShowPassword(!isShowPassword)}
//             >
//               {isShowPassword ? (
//                 <FaEye size="24px" />
//               ) : (
//                 <FaEyeSlash size="24px" />
//               )}
//             </ShowPasswordBtn>
//             {errors.password && touched.password ? (
//               <div>
//                 {errors.password}
//               </div>
//             ) : null}
//           </Label>
//           <Button
//             type="submit"
//             name="button"
//             // disabled={isLoading || !isValid || !dirty}
//           >
//             Register
//           </Button>
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             flexDirection="row"
//             gridGap="2"
//           >
//             <Box as="p" fontSize="s" m={0} fontWeight="regular" color="text">
//               {text}
//             </Box>
//             <StyledLink to={path}>{title}</StyledLink>
//           </Box>
//         </StyledForm>
//       )}
//     </Formik>
//   );
