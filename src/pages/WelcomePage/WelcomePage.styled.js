import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import imgDesk from '../../images/bgPages/welcomePage/welcomePage@1x-desk.png';
import imgDeskX2 from '../../images/bgPages/welcomePage/welcomePage@2x-desk.png';
import imgTab from '../../images/bgPages/welcomePage/welcomePage@1x-tab.png';
import imgTabX2 from '../../images/bgPages/welcomePage/welcomePage@2x-tab.png';
import imgMob from '../../images/bgPages/welcomePage/welcomePage@1x-mob.png';
import imgMobX2 from '../../images/bgPages/welcomePage/welcomePage@2x-mob.png';

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;

  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${imgDesk});

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${imgDeskX2});
  }

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 768px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${imgTab});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${imgTabX2});
    }
  }

  @media screen and (max-width: 375px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${imgMob});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${imgMobX2});
    }
  }
`;

export const Box = styled.div`
  padding-top: 30vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 44px;

  @media screen and (max-width: 375px) {
    width: 54px;
    height: 54px;
    margin-bottom: 28px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  margin-bottom: 40px;
  flex-direction: column;
  width: 544px;
  @media screen and (max-width: 375px) {
    width: 305px;
  }
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.btnTextLight};
  font-weight: ${props => props.theme.fontWeights[2]};
  font-size: 28px;
  margin-bottom: 14px;
  line-height: ${props => props.theme.lineHeights.subheader};
  letter-spacing: ${props => props.theme.lineHeights.content};

  @media screen and (max-width: 375px) {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.btnTextLight};
  font-weight: ${props => props.theme.fontWeights[0]};
  font-size: 24px;
  display: flex;
  text-align: center;
  line-height: ${props => props.theme.lineHeights.content};
  letter-spacing: ${props => props.theme.lineHeights.content};

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const BoxLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

export const LinkRegister = styled(NavLink)`
  color: ${props => props.theme.colors.btnTextLight};
  background-color: ${props => props.theme.colors.footerBtnBg};
  font-weight: ${props => props.theme.fontWeights[0]};
  font-size: 16px;
  line-height: ${props => props.theme.lineHeights.searchSelect};

  border-radius: 24px 44px;
  border: none;

  padding: 20px 40px;
  transition: ${props => props.theme.transitions.main};
  &:hover {
    background-color: ${props => props.theme.colors.mainBtnText};
  }

  @media screen and (max-width: 375px) {
    font-size: 14px;
    padding: 16px 36px;
  }
`;

export const LinkLogin = styled(NavLink)`
  color: ${props => props.theme.colors.btnTextLight};
  background-color: transparent;
  font-weight: ${props => props.theme.fontWeights[0]};
  font-size: 16px;
  line-height: ${props => props.theme.lineHeights.searchSelect};

  border-radius: 24px 44px;
  border: ${props => props.theme.borders.searchInput};

  padding: 20px 40px;

  transition: ${props => props.theme.transitions.main};
  &:hover {
    color: ${props => props.theme.colors.footerBtnBg};
    background-color: ${props => props.theme.colors.btnTextLight};
    border: ${props => props.theme.borders.mainNavBord};
  }

  @media screen and (max-width: 375px) {
    font-size: 14px;
    padding: 16px 36px;
  }
`;
