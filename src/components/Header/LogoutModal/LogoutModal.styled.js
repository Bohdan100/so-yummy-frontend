import styled, { keyframes } from 'styled-components';
import { ReactComponent as CrossIcon } from '../../../images/icons/close-20.svg';

const slideDown = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slideUpAndFadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 44px 24px;

  width: 330px;
  height: 179px;

  background: ${p => p.theme.colors.bodyBg};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  animation: ${p => (p.isShown ? slideDown : slideUpAndFadeOut)} 500ms ease
    ${p => (p.isShown ? '0ms' : '250ms')};

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 215px;
    padding: 50px 40px;
  }
  @media screen and (min-width: 1440px) {
    width: 500px;
    padding: 50px;
  }
`;

export const CrossBtb = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`;

export const CrossIconStyled = styled(CrossIcon)`
  width: 20px;
  height: 20px;
  stroke: ${p => p.theme.colors.mainBtnText};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const ConfirmTitle = styled.h3`
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.extraContent};
  text-align: center;
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.mainDark};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 18px;
    line-height: ${p => p.theme.lineHeights.content};
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const LogoutBtn = styled.button`
  width: 137px;
  height: 49px;
  padding: 14px 18px;

  background: ${p => p.theme.colors.mainAccent};
  border-radius: ${p => p.theme.radii.btnStandart};
  border: none;

  font-size: 14px;
  line-height: ${p => p.theme.lineHeights.extraContent};
  text-align: center;
  color: ${p => p.theme.colors.btnTextLight};
  transition: ${p => p.theme.transitions.main};

  @media screen and (min-width: 768px) {
    padding: 18px 39px;
    width: 192px;
    height: 59px;

    font-size: 16px;
    line-height: ${p => p.theme.lineHeights.btnText};
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.logOutBtnHoverBg};
    color: ${p => p.theme.colors.logOutBtnHoverText};
  }
`;

export const CancelBtn = styled.button`
  width: 137px;
  height: 49px;
  padding: 14px 18px;

  background: ${p => p.theme.colors.mainGreyBg};
  border-radius: ${p => p.theme.radii.btnStandart};
  border: none;

  font-size: 14px;
  line-height: ${p => p.theme.lineHeights.extraContent};
  text-align: center;
  color: ${p => p.theme.colors.mainDark};
  transition: ${p => p.theme.transitions.main};

  @media screen and (min-width: 768px) {
    padding: 18px 39px;
    font-size: 16px;
    line-height: ${p => p.theme.lineHeights.btnText};
    width: 192px;
    height: 59px;
  }

  &:hover,
  &:focus {
    background-color: transparent;
    border: 1px solid #23262a;
  }
`;
