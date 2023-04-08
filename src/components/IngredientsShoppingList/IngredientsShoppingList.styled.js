import styled from 'styled-components';

export const IngredientsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 50px;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    gap: 24px;
    margin-bottom: 96px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-bottom: 100px;
  }
`;
