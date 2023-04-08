import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWraper = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    margin: 0;
    align-items: flex-start;
  }
  @media screen and (min-width: 1440px) {
    gap: 24px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 14px;
  line-height: ${p => p.theme.lineHeights.extraContent};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.bodyBg};

  transition: ${p => p.theme.transitions.main};

  &.active {
    color: ${p => p.theme.colors.mainAccent};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.mainAccent};
  }

  @media screen and (min-width: 768px) {
  }
`;
