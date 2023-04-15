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

import { useTranslation } from 'react-i18next';

import { MainContainerTwo } from '../../components/Header/Header.styled';
import Logo from '../../images/icons/logo-desktop.svg';

const WelcomePage = () => {
  const { t } = useTranslation();

   return (
    <MainContainerTwo>
      <Container>
        <Box>
          <Image src={Logo} width={68} height={68} />
          <TextBox>
            <Title>{t('welcomePage.title')}</Title>
            <Text>{t('welcomePage.description')}</Text>
          </TextBox>
          <BoxLink>
            <LinkRegister to="/register">{t('button.register')}</LinkRegister>
            <LinkLogin to="/signin">{t('button.login')}</LinkLogin>
          </BoxLink>
        </Box>
      </Container>
    </MainContainerTwo>
  );
};

export default WelcomePage;