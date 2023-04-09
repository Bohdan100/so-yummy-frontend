import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../../../images/icons/arrow-right.svg';

export const LogOutBtnStyled = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  width: 125px;
  height: 43px;
  background-color: ${p => p.theme.colors.logOutBtnBg};

  font-size: 14px;
  line-height: 1.5;
  color: ${p => p.theme.colors.btnTextLight};

  padding: 12px 24px;
  outline: none;
  border: none;
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
  text-align: center;
  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.btnHoverBg};

    svg {
      stroke: ${p => p.theme.colors.btnHoverBg};
    }
  }

  @media screen and (min-width: 768px) {
    width: 141px;
    padding: 12px 32px;
  }
`;

export const ArrowIconStyled = styled(ArrowIcon)`
  width: 18px;
  height: 18px;
  stroke: ${p => p.theme.colors.btnTextLight};
  transition: ${p => p.theme.transitions.main};
`;
