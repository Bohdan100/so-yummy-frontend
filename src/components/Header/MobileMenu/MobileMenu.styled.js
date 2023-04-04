import styled, { keyframes } from 'styled-components';

export const MobileConteiner = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${p => p.theme.colors.secondaryAccent};
  background-image: url('../../../images/elements/leaves/leaves-mobile-menu@1x.png');
  background-repeat: no-repeat;
  background-position: bottom right;
  z-index: 10000;
  transform: ${p =>
    p.isShown === true
      ? 'translate3d(0, 0vh, 0)'
      : 'translate3d(0, -100vh, 0)'};
  transition: transform 1s cubic-bezier(0, 0.52, 0, 1);

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('../../../images/elements/leaves/leaves-mobile-menu@2x.png');
  }

  @media screen and (min-width: 768px) {
    background-image: url('../../../images/elements/leaves/leaves-mobile-menu-@1-1.png');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('../../../images/elements/leaves/leaves-mobile-menu-@2-2.png');
    }
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 18px;
  left: 16px;

  @media screen and (min-width: 768px) {
    top: 18px;
    left: 32px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 22px;
  right: 16px;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    top: 24px;
    right: 32px;
  }
`;
