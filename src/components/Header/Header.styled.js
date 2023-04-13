import styled from 'styled-components';
import { ReactComponent as BurgerIcon } from '../../images/icons/burger-menu-mob.svg';

export const MainContainerTwo = styled.div`
  max-width: ${p => p.theme.breakpoints[0]};
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    max-width: ${p => p.theme.breakpoints[1]};
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: ${p => p.theme.breakpoints[2]};
    padding: 0 100px;
  }
`;
export const HeaderStyled = styled.header`
  padding-top: 18px;
  position: relative;
  z-index: 10;

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
