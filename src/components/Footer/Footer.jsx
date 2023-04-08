import LogoFooter from './LogoFooter';
import NavFooter from './NavFooter';
import SubscribeForm from './SubscribeForm';

import SocNetworks from './SocNetworks';

import {
  TopWrapper,
  FooterStyled,
  FooterContainer,
  FooterWrap,
  BottomText,
  Wrap,
  WrapDesk,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyled>
      <TopWrapper>
        <LogoFooter />
        <NavFooter />
        <SubscribeForm />
        <SocNetworks />
      </TopWrapper>

      <BottomText>
        <p>
          © 2023 All Rights Reserved. <span>Terms of Service</span>
        </p>
      </BottomText>
    </FooterStyled>
  );
};

export default Footer;
