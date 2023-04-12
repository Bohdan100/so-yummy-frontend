import styled from 'styled-components';

export const SkewBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  white-space: nowrap;
  box-sizing: border-box;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.subheader};
  font-size: 14px;
  color: ${p => p.theme.colors.mainBtnCategoryText};
  padding: 16px 32px;
  background-color: ${p =>
    p.styled === 'olive' ? p.theme.colors.mainAccent : p.theme.colors.mainBTn};
  outline: none;
  border: none;
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
  text-align: center;
  cursor: pointer;
  transition: ${p => p.theme.transitions.main};
  &:hover {
    background-color: ${p =>
      p.styled === 'olive'
        ? p.theme.colors.mainBTn
        : p.theme.colors.mainAccent};
    color: ${p => p.theme.colors.mainBtnCategoryTextHover};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: 18px 52px;
    min-width: 130px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: 16px;
    line-height: ${p => p.theme.lineHeights.btnText};
    padding: 23px 52px;
    min-width: 160px;
  }
`;
