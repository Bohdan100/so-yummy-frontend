import styled from 'styled-components';

export const Container = styled.div`
  /* max-width - 375px*/
  max-width: ${p => p.theme.breakpoints[0]};
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    /* max-width - 768px*/
    max-width: ${p => p.theme.breakpoints[1]};
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    /* max-width - 1400px*/
    max-width: ${p => p.theme.breakpoints[2]};
    padding: 0 100px;
  }
`;
