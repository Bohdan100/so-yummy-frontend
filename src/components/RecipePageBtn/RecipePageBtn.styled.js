import styled from 'styled-components';

export const RecipePageBtnStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  white-space: nowrap;
  box-sizing: border-box;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.subheader};
  font-size: 10px;
  color: #23262a;
  padding: 10px 18px;
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
  transition: ${({ theme }) => {
    return theme.transitions.main;
  }};

  &:hover {
    color: ${p => p.theme.colors.btnTextLight};
    background-color: ${p => p.theme.colors.mainAccent};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 16px;
    padding: 18px 44px;
  }
`;
