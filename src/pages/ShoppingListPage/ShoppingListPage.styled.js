import styled from 'styled-components';

export const ShoppingListPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
  margin-left: 16px;
`;

export const StyledLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const HeaderTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${div => div.theme.radii.image};
  height: 42px;
  padding: 10px;
  margin-top: 50px;
  margin-bottom: 32px;
  color: ${p => p.theme.colors.mainBtnCategoryText};
  background-color: ${p => p.theme.colors.mainAccent};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    height: 58px;
    padding: 20px;
    margin-bottom: 50px;
    margin-top: 72px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    height: 60px;
    padding: 20px 40px;
  }
  p {
    font-weight: ${p => p.theme.fontWeights[2]};
    font-size: 12px;
    line-height: ${p => p.theme.lineHeights.time};
    letter-spacing: 0.03em;
    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      font-size: 18px;
    }
  }
  span {
    margin-left: 24px;
    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      margin-left: 78px;
    }
    @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
      margin-left: 142px;
    }
  }
`;
