import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  position: relative;
  max-width: 275px;
  /* width: fit-content; */
  /* box-sizing: border-box; */
  height: 51px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 12px 26px;
  display: flex;
  /* flex-wrap: nowrap; */
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.mainWhite};
  box-shadow: ${p => p.theme.colors.paginationShadow};
  border-radius: ${p => p.theme.radii.pagination};
  & nav {
    max-width: 100%;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    max-width: 324px;
    height: 55px;
    padding: 14px 24px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    max-width: 436px;
    padding: 14px 24px;
  }
`;
