import styled, { keyframes } from 'styled-components';
import bgMob1x from '../../../images/elements/leaves/leaves-mobile-menu@1x.png';
import bgMob2x from '../../../images/elements/leaves/leaves-mobile-menu@2x.png';
import bgTab1x from '../../../images/elements/leaves/leaves-mobile-menu-@1-1.png';
import bgTab2x from '../../../images/elements/leaves/leaves-mobile-menu-@2-2.png';

// TODO: не работает плавная анимация на закрытие MobileContainer, пока не знаю почему
const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

export const MobileContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${p => p.theme.colors.secondaryAccent};
  background-image: url(${bgMob1x});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: contain;
  z-index: 10000;
  animation: ${p => (p.isShown ? slideDown : slideUp)} 500ms ease-in-out
    ${p => (p.isShown ? '0ms' : '250ms')} forwards;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMob2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${bgTab1x});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgTab2x});
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

export const ThemeTogglerWrapper = styled.div`
  position: absolute;
  bottom: 18px;
  left: 16px;

  @media screen and (min-width: 768px) {
    bottom: 32px;
    left: 32px;
  }
`;
