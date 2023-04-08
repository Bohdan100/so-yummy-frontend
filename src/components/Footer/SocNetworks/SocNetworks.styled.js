import styled from 'styled-components';

import { ReactComponent as Facebook } from '../../../images/icons/facebook.svg';
import { ReactComponent as Youtube } from '../../../images/icons/youtube.svg';
import { ReactComponent as Twitter } from '../../../images/icons/twitter.svg';
import { ReactComponent as Instagram } from '../../../images/icons/instagram.svg';

export const SocLinkList = styled.ul`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }

  svg {
    fill: ${p => p.theme.colors.footerSMlinks};
    transition: ${p => p.theme.transitions.main};

    :hover {
      fill: ${p => p.theme.colors.footerSMlinksHover};
    }
  }
`;
