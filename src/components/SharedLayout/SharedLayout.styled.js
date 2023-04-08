import styled from 'styled-components';
import bottomMob1 from '../../images/elements/leaves/three_leaves_mobile@1x.png';
import bottomMob2 from '../../images/elements/leaves/three_leaves_mobile@2x.png';
import smallRightMob1 from '../../images/elements/leaves/leaves_small_mob@1x.png';
import smallRightMob2 from '../../images/elements/leaves/leaves_small_mob@2x.png';
import bottomTab1 from '../../images/elements/leaves/three_leaves_tablet@1x.png';
import bottomTab2 from '../../images/elements/leaves/three_leaves_tablet@2x.png';
import smallRightTab1 from '../../images/elements/leaves/leaves_small_tablet@1x.png';
import smallRightTab2 from '../../images/elements/leaves/leaves_small_tablet@2x.png';
import bottomDesk1 from '../../images/elements/leaves/three_leaves_desktop@1x.png';
import bottomDesk2 from '../../images/elements/leaves/three_leaves_desktop@2x.png';
import smallRightDesk1 from '../../images/elements/leaves/leaves_small_desktop@1x.png';
import smallRightDesk2 from '../../images/elements/leaves/leaves_small_desktop@2x.png';

export const LayoutStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${bottomMob1}), url(${smallRightMob1});
  background-repeat: no-repeat;
  background-size: 315px 487px, 179px 155px;
  background-position: bottom 270px left, bottom right;
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${bottomMob2}), url(${smallRightMob2});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${bottomTab1}), url(${smallRightTab1});
    background-repeat: no-repeat;
    background-size: 500px 790px, 341px 261px;
    background-position: bottom 130px left, bottom right;
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bottomTab2}), url(${smallRightTab2});
    }
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${bottomDesk1}), url(${smallRightDesk1});
    background-repeat: no-repeat;
    background-size: 696px 1037px, 531px 391px;
    background-position: bottom 15px left, bottom right;
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bottomDesk2}), url(${smallRightDesk2});
    }
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
`;

export const FooterContainer = styled.div`
  flex-shrink: 0;
`;
