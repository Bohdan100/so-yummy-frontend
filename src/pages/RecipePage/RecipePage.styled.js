import styled from 'styled-components';

export const RecipePageStyled = styled.div`
  padding-top: 426px;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-top: 482px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    padding-top: 480px;
  }
`;

export const HeaderTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${div => div.theme.radii.image};
  height: 42px;
  padding: 0 14px;

  margin-bottom: 24px;
  color: ${p => p.theme.colors.mainLight};
  background-color: ${p => p.theme.colors.mainAccent};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    height: 58px;
    padding: 0 32px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    height: 60px;
    padding: 0 40px;

    margin-bottom: 50px;
  }
  p {
    font-weight: ${p => p.theme.fontWeights[2]};
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: 0.03em;
    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      font-size: 18px;
    }
  }
  span {
    margin-left: 16px;

    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      margin-left: 38px;
    }
    @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
      margin-left: 109px;
    }
  }
`;
