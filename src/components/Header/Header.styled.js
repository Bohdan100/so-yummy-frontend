import styled from 'styled-components';
import { ReactComponent as BurgerIcon } from '../../images/icons/burger-menu-mob.svg';

export const HeaderStyled = styled.header`
  padding-top: 18px;

  @media screen and (min-width: 1440px) {
    padding-top: 14px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 50px;
  }
`;

export const BurgerBtn = styled.button`
  display: flex;
  align-items: 'center';
  justify-content: 'center';
  background-color: transparent;
  border: none;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const BurgerIconStyled = styled(BurgerIcon)`
  width: 28px;
  height: 28px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;