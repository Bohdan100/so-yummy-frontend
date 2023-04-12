import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 64px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 50px;
    margin-top: 72px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    gap: 100px;
    margin-top: 100px;
    margin-bottom: 14px;
  }
`;
export const Title = styled.h1`
  margin-bottom: 32px;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights[2]};
  font-size: 28px;
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  font-feature-settings: 'liga' off;
  color: ${p => p.theme.colors.sectionHeader};

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 32px;
    line-height: ${p => p.theme.lineHeights.subheader};
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
    font-size: 44px;
    line-height: ${p => p.theme.lineHeights.subheader};
  }
`;

export const SeeAllBtn = styled(NavLink)`
  margin-left: auto;
  margin-right: 0;
  border-radius: 6px;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${p => p.theme.colors.mainBtnCategoryText};
  border: ${p => p.theme.borders.mainNavBord};
  padding: 10px 24px;
  background-color: ${p => p.theme.colors.mainBtnBGCategory};
  cursor: pointer;
  float: right;
  transition: ${({ theme }) => {
    return theme.transitions.main;
  }};
  &:hover {
    background-color: ${p => p.theme.colors.mainBtnBGHover};
    border: ${p => p.theme.borders.mainNavBord};
    color: ${p => p.theme.colors.mainBtnCategoryTextHover};
  }
`;

export const CardList = styled.ul`
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0;
  @media (min-width: 768px) {
    margin-bottom: 40px;
    gap: 31px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 50px;
    gap: 14px;
  }
`;

export const OtherBtn = styled(NavLink)`
  margin: 0 auto;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  white-space: nowrap;
  box-sizing: border-box;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.searchSelect};
  font-size: 14px;
  color: ${p => p.theme.colors.mainBtnText};
  padding: 14px 32px;
  background-color: transparent;
  outline: none;
  border: none;
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
  text-align: center;
  border: 1px solid ${p => p.theme.colors.mainAccent};
  cursor: pointer;
  transition: ${p => p.theme.transitions.main};
  &:hover {
    color: ${p => p.theme.colors.btnTextLight};
    background-color: ${p => p.theme.colors.mainAccent};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 16px;
    padding: 20px 52px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-bottom: 118px;
  }
`;
