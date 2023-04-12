import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ChooseBlock = styled.div`
  width: 225px;
  height: 92px;
  background-color: ${p => p.theme.colors.recipeBlockBg};
  border-radius: 8px;
  padding: 8px;
  margin-left: 40px;
  margin-bottom: 115px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 14px;
    padding: 12px;
    line-height: 20px;
    letter-spacing: -0.24px;
    width: 261px;
    height: 100px;
    position: absolute;
    right: -360px;
    top: 320px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    line-height: 20px;
    padding: 16px;
    width: 298px;
    height: 114px;
    position: absolute;
    right: -425px;
    top: 370px;
  }
`;

export const ChooseText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.secondaryDark};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 14px;
    line-height: 18px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    line-height: 20px;
  }
`;

export const ChooseSpan = styled.span`
  color: ${p => p.theme.colors.mainAccent};
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 14px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    line-height: 20px;
  }
`;
export const ChooseLink = styled(NavLink)`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.secondaryDark};
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transform: ${p => p.theme.transitions.main};
  &:hover {
    color: ${p => p.theme.colors.mainAccent};
    svg path {
      stroke: ${p => p.theme.colors.mainAccent};
    }
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 14px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    line-height: 20px;
  }
`;

export const RightArrow = styled.svg`
  width: 18px;
  height: 18px;
  margin-left: 4px;
  display: flex;
  stroke: ${p => p.theme.colors.secondaryDark};
  transition: ${p => p.theme.transitions.main};
  transform: ${p => p.theme.transitions.main};
`;
