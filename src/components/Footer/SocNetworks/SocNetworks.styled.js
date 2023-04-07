import styled from 'styled-components';

import { ReactComponent as Facebook } from '../../../images/icons/facebook.svg';
import { ReactComponent as Youtube } from '../../../images/icons/youtube.svg';
import { ReactComponent as Twitter } from '../../../images/icons/twitter.svg';
import { ReactComponent as Instagram } from '../../../images/icons/instagram.svg';

export const SocNetworksWraper = styled.div`
  margin-top: 44px;
  display: flex;
  justify-content: center;
  align-items: center;

  fill: ${p => p.theme.colors.footerSMlinks};
  transition: ${p => p.theme.transitions.main};
  :hover {
    fill: ${p => p.theme.colors.footerSMlinksHover};
  }
`;

export const SocNetworksList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    margin-top: 38px;
    gap: 18px;
  }
`;

export const SocNetwoerksItem = styled.li`
  cursor: pointer;
  /* fill: ${p => p.theme.colors.footerSMlinks};
  transition: ${p => p.theme.transitions.main};
  :hover {
    fill: ${p => p.theme.colors.footerSMlinksHover};
  } */
`;

export const FacebookStyled = styled(Facebook)`
  width: 18px;
  height: 18px;
  /* fill: ${p => p.theme.colors.footerSMlinks};
  transition: ${p => p.theme.transitions.main};
  :hover {
    fill: ${p => p.theme.colors.footerSMlinksHover};
  } */

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const YoutubeStyled = styled(Youtube)`
  width: 19px;
  height: 14px;
  /* fill: ${p => p.theme.colors.footerSMlinks};
  transition: ${p => p.theme.transitions.main};
  :hover {
    fill: ${p => p.theme.colors.footerSMlinksHover};
  } */

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 15px;
  }
`;

export const TwitterStyled = styled(Twitter)`
  width: 18px;
  height: 14px;
  /* fill: ${p => p.theme.colors.footerSMlinks};
  transition: ${p => p.theme.transitions.main};
  :hover {
    fill: ${p => p.theme.colors.footerSMlinksHover};
  } */

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 16px;
  }
`;

export const InstagramStyled = styled(Instagram)`
  width: 18px;
  height: 18px;
  /* fill: ${p => p.theme.colors.footerSMlinks};
  transition: ${p => p.theme.transitions.main};
  :hover {
    fill: ${p => p.theme.colors.footerSMlinksHover};
  } */

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
