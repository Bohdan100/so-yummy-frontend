import styled, { keyframes } from 'styled-components';
import { Form, Field } from 'formik';

import { ReactComponent as CrossIcon } from '../../../images/icons/close-20.svg';
import { ReactComponent as UserIcon } from '../../../images/icons/user.svg';
import PlusIcon from '../../../images/icons/plus.svg';

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
  width: 330px;
  height: 327px;
  padding: 32px 24px;
  background-color: ${p => p.theme.colors.bodyBg};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: ${p => p.theme.radii.modal};
  animation: ${p => (p.isShown ? slideDown : slideUpAndFadeOut)} 500ms
    ease-in-out ${p => (p.isShown ? '0ms' : '250ms')};

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 402px;
    padding: 50px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
    height: 425px;
    padding: 60px 50px;
  }
`;

export const CloseBtn = styled.button`
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

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const FormStyled = styled(Form)`
  input[type='file'] {
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
    z-index: -1;
    display: block;
    padding: 0;
  }

  & img {
    width: 88px;
    height: 88px;
    border-radius: ${p => p.theme.radii.circle};

    @media screen and (min-width: 768px) {
      width: 103px;
      height: 103px;
    }
  }
`;

export const UserAvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 54px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 52px;
  }
`;

export const UserImgWrapper = styled.div`
  position: relative;
  width: 88px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.circle};
  background-color: ${p => p.theme.colors.mainGreyBg};

  & svg {
    width: 40px;
    height: 40px;
    stroke: ${p => p.theme.colors.secondaryGreyBg};
  }

  &::after {
    position: absolute;
    right: 0;
    bottom: -5%;
    transform: translateX(-50%);
    content: url(${PlusIcon});
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 768px) {
    width: 103px;
    height: 103px;

    & svg {
      width: 47px;
      height: 47px;
    }
  }
`;

export const InputButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const NameLabel = styled.label`
  width: 100%;
  position: relative;
`;

export const NameInput = styled(Field)`
  width: 282px;
  height: 48px;
  padding: 14px;
  padding-left: 40px;

  font-size: 14px;
  letter-spacing: ${p => p.theme.letterSpacings.content};
  line-height: ${p => p.theme.lineHeights.searchSelect};
  color: ${p => p.theme.colors.mainDark};
  opacity: 0.8;

  outline: none;
  border: ${p => p.border};

  border-radius: ${p => p.theme.radii.btnStandart};
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 58px;
    font-size: 18px;
    padding: 18px;
    padding-left: 51px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 16px;
    padding-right: 18px;
    padding-bottom: 16px;
  }
`;

export const UserIconStyled = styled(UserIcon)`
  position: absolute;
  width: 18px;
  height: 18px;
  stroke: ${p => p.stroke};
  top: 50%;
  left: 16.5px;
  transform: translateY(-50%);

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const EditBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 0;
  border: none;
  transition: ${p => p.theme.transitions.main};

  @media screen and (min-width: 768px) {
    right: 18px;
  }

  & svg {
    stroke: ${p => p.theme.colors.mainDark};
    width: 17px;
    height: 17px;

    @media screen and (min-width: 768px) {
      width: 19px;
      height: 19px;
    }
  }
`;

export const SubmitBtn = styled.button`
  width: 282px;
  height: 49px;
  padding: 14px 84px;
  background-color: ${p => p.theme.colors.mainAccent};
  border-radius: ${p => p.theme.radii.btnStandart};
  border: none;

  font-family: ${p => p.theme.fonts.btnStandart};
  line-height: ${p => p.theme.lineHeights.extraContent};
  font-size: 14px;
  white-space: nowrap;

  color: ${p => p.theme.colors.btnTextLight};
  transition: ${p => p.theme.transitions.main};

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 59px;
    padding: 18px 143px;
    font-size: 16px;
    line-height: ${p => p.theme.lineHeights.btnText};
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.btnHoverBg};
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  color: red;
  top: 50%;
  left: ${p => (p.location === 'file' ? '24px' : '0')};
  transform: ${p =>
    p.location === 'file' ? 'translateY(-150%)' : 'translateY(-50%)'};
  font-size: 11px;

  @media screen and (min-width: 768px) {
    left: ${p => (p.location === 'file' ? '40px' : '0')};
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    left: ${p => (p.location === 'file' ? '50px' : '0')};
  }
`;
