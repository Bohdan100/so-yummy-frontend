import styled from 'styled-components';

export const FavList = styled.li`
  margin-top: 50px;
  margin-bottom: 18px;
  list-style: none;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-top: 100px;
    margin-bottom: 50px;
  }
`;
