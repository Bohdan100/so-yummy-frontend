import ArticleFooter from './ArticleFooter';
import NavFooter from './NavFooter';
import SubscribeForm from './SubscribeForm';
import MainContainer from 'components/MainContainer/MainContainer';
import SocNetworks from './SocNetworks';

import { FooterContainer } from './Footer.styled';

const Footer = () => {
  return (
    <MainContainer>
      <FooterContainer>
        <ArticleFooter />
        <NavFooter />
        <SubscribeForm />
        <SocNetworks />
        <div>
          <span>© 2023 All Rights Reserved.</span>
          <span> Terms of Service</span>
        </div>
        <div></div>
      </FooterContainer>
    </MainContainer>
  );
};

export default Footer;
