import styled from 'styled-components';
import { ReactComponent as SvgLogo } from '../../images/icons/logo.svg';
import { ReactComponent as SvgLogoInv } from '../../images/icons/logoInv.svg';

export const SvgLogoStyled = styled(SvgLogo)`
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const SvgLogoInvStyled = styled(SvgLogoInv)`
  width: ${p => (p.footer ? '32px' : '40px')};
  height: ${p => (p.footer ? '32px' : '40px')};

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
