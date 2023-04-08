import ArticleFooter from './ArticleFooter';
import NavFooter from './NavFooter';
import SubscribeForm from './SubscribeForm';

import SocNetworks from './SocNetworks';

import {
  FooterContainer,
  FooterWrap,
  BottomText,
  Wrap,
  WrapDesk,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <WrapDesk>
          <Wrap>
            <ArticleFooter />
            <NavFooter />
          </Wrap>
          <SubscribeForm />
        </WrapDesk>
        <SocNetworks />
      </FooterWrap>
      <BottomText>
        <p>
          © 2023 All Rights Reserved. <span>Terms of Service</span>
        </p>
      </BottomText>
    </FooterContainer>
  );
};

export default Footer;
