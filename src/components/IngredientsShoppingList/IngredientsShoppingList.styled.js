import styled from 'styled-components';

export const IngredientsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 100px;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    gap: 44px;
    margin-bottom: 200px;
  }
`;
