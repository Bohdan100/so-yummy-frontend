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
export const NotFavorites = styled.p`
  opacity: 0.5;
  font-size: 14px;
  padding-bottom: 100px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.secondaryDark};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 24px;
  }
`;
