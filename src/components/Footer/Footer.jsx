import { useMedia } from 'react-use';
import { useTranslation } from 'react-i18next';

import LogoFooter from './LogoFooter';
import FooterInfo from './FooterInfo';
import NavFooter from './NavFooter';
import SubscribeForm from './SubscribeForm';

import SocNetworks from './SocNetworks';

import {
  TopWrapper,
  FooterStyled,
  BottomWrapper,
  LogoNavWrapper,
  WrapperForDesktop,
} from './Footer.styled';

const Footer = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const { t } = useTranslation();
  return (
    <FooterStyled>
      <TopWrapper>
        <WrapperForDesktop>
          <LogoNavWrapper isMobile={isMobile}>
            <div>
              <LogoFooter />
              {!isMobile && <FooterInfo />}
            </div>

            <NavFooter />
          </LogoNavWrapper>
          <SubscribeForm />
        </WrapperForDesktop>

        <SocNetworks location={'footer'} />
      </TopWrapper>

      <BottomWrapper>
        <p>
          {t('footer.rights')}
          <span>{t('footer.terms')}</span>
        </p>
      </BottomWrapper>
    </FooterStyled>
  );
};

export default Footer;
