import styled from 'styled-components';
import bgMob from '../../images/bgPages/authPage/auth_back_mob.png';
import bgDesk from '../../images/bgPages/authPage/auth_back_desktop.png';
import bgTab from '../../images/bgPages/authPage/auth_back_tablet.png';
import imgMob from '../../images/bgPages/authPage/auth_mob@1x.png';
import imgMob2 from '../../images/bgPages/authPage/auth_mob@2x.png';
import imgTab from '../../images/bgPages/authPage/auth_tablet@1x.png';
import imgTab2 from '../../images/bgPages/authPage/auth_tablet@2x.png';
import imgDesk from '../../images/bgPages/authPage/auth_desktop@1x.png';
import imgDesk2 from '../../images/bgPages/authPage/auth_desktop@2x.png';

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #fafafa;
  justify-content: center;
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    flex-direction: row-reverse;
    gap: 115px;
  }
`;

export const BackgroundImage = styled.div`
  width: 285px;
  height: 250px;
  z-index: 1;
  top: 87px;
  margin: 0 auto;
  position: absolute;
  align-self: flex-end;
  background-size: cover;
  background-image: url(${imgMob});

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${imgMob2});
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 409px;
    height: 359px;
    top: 96px;
    background-image: url(${imgTab});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${imgTab2});
    }
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 532px;
    height: 468px;
    position: relative;
    top: 0px;
    margin: 0;
    align-self: center;
    background-image: url(${imgDesk});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${imgDesk2});
    }
  }
`;

export const Background = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  height: 60%;
  align-self: flex-end;
  background-size: cover;
  background-image: url(${bgMob});
  background-repeat: no-repeat;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    background-image: url(${bgTab});
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    background-image: url(${bgDesk});
    height: 45%;
  }
`;
