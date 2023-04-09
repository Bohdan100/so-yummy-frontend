import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../../images/icons/search.svg';

export const ListNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding-top: 182px;

  @media screen and (min-width: 768px) {
    padding-top: 186px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  font-size: 18px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.subheader};
  color: ${p => p.color};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  /* transition: ${p => p.theme.transitions}; */
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: ${p => p.theme.lineHeights.headerLinks};
  }

  &.active {
    color: ${p => p.theme.colors.mainAccent};

    & svg {
      stroke: ${p => p.theme.colors.mainAccent};
    }
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: ${p => p.theme.colors.mainAccent};

    & svg {
      stroke: ${p => p.theme.colors.mainAccent};
    }
  }
`;

export const SerchWrapperNavLink = styled.div`
  display: flex;
  align-items: 'center';
  gap: 8px;
`;

export const SearchIconStyled = styled(SearchIcon)`
  stroke: ${p => p.color};
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
