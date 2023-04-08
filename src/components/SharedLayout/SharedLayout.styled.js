import styled from 'styled-components';
import bottomMob1 from '../../images/elements/leaves/three_leaves_bottom_mob.png';
import bottomMob2 from '../../images/elements/leaves/three_leaves_bottom_mob-2.png';
import bottomTab1 from '../../images/elements/leaves/three_leaves_bottom_tablet.png';
import bottomTab2 from '../../images/elements/leaves/three_leaves_bottom_tablet-2.png';
import bottomDesk1 from '../../images/elements/leaves/three_leaves_bottom_desktop.png';
import bottomDesk2 from '../../images/elements/leaves/three_leaves_bottom_desktop_2.png';

export const LayoutStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${bottomMob1});
  background-repeat: no-repeat;
  background-size: 320px;
  background-position: bottom 270px left;
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${bottomMob2});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${bottomTab1});
    background-size: 520px;
    background-position: bottom 130px left;
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bottomTab2});
    }
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${bottomDesk1});
    background-size: 700px;
    background-position: bottom 15px left;
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bottomDesk2});
    }
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
`;

export const FooterContainer = styled.div`
  flex-shrink: 0;
`;
