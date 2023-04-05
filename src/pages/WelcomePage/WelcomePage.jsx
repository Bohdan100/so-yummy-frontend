import {
  LinkRegister,
  LinkLogin,
  Container,
  TextBox,
  Title,
  Text,
  BoxLink,
  Box,
  Image,
} from './WelcomePage.styled';

import MainContainer from '../../components/MainContainer/MainContainer';

import Logo from '../../images/icons/logo-desktop.svg';

const WelcomePage = () => {
  return (
    <MainContainer>
      <Container>
        <Box>
          <Image src={Logo} width={68} height={68} />
          <TextBox>
            <Title>Welcome to the app!</Title>
            <Text>
              This app offers more than just a collection of recipes - it is
              designed to be your very own digital cookbook. You can easily save
              and retrieve your own recipes at any time.
            </Text>
          </TextBox>
          <BoxLink>
            <LinkRegister to="/register">Registration</LinkRegister>
            <LinkLogin to="/signin">Sign in</LinkLogin>
          </BoxLink>
        </Box>
      </Container>
    </MainContainer>
  );
};

export default WelcomePage;
