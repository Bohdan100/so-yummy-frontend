// TODO: не работает плавная анимация на закрытие ModalWrapper, пока не знаю почему
// transition пробовала

import styled, { keyframes } from 'styled-components';
import { ReactComponent as EditIcon } from '../../../images/icons/edit-01.svg';

const slideDown = keyframes`
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1
  }
`;

const slideUpAndFadeOut = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-25%);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-50%);
    opacity: 0;
  }
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 72px;
  right: 60px;
  display: flex;
  flex-direction: column;
  padding: 18px;
  gap: 28px;
  width: 161px;
  height: 130px;
  animation: ${p => (p.isShown ? slideDown : slideUpAndFadeOut)} 500ms
    ease-in-out ${p => (p.isShown ? '0ms' : '250ms')};

  background-color: ${p => p.theme.colors.bodyBg};
  border: 1px solid #8baa36;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    top: 78px;
    right: 128px;
    gap: 32px;
    width: 177px;
    height: 134px;
    border: none;
  }

  @media screen and (min-width: 1440px) {
    right: 211px;
  }
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  border: none;
  width: 125px;
  height: 23px;
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 14px;
  line-height: ${p => p.theme.lineHeights.headerLinks};
  color: ${p => p.theme.colors.mainDark};
  background-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    width: 141px;
    height: 23px;
    gap: 53px;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.mainAccent};

    > svg {
      stroke: ${p => p.theme.colors.mainAccent};
      color: ${p => p.theme.colors.mainAccent};
    }
  }
`;

export const EditIconStyled = styled(EditIcon)`
  stroke: ${p => p.theme.colors.mainDark};
  color: ${p => p.theme.colors.mainDark};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
