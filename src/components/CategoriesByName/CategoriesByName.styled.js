import styled from 'styled-components';

export const RecipesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 100px;
  margin-top: 32px;
  gap: 28px;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: 200px;
    margin-top: 50px;
    gap: 32px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    gap: 14px;
    row-gap: 100px;
  }
`;
