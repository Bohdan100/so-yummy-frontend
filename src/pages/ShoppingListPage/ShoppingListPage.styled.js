import styled from 'styled-components';

export const ShoppingListPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
`;

export const ShopListTitle = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  color: #001833;
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 1440px) {
    font-size: 44px;
  }
`;

export const EmptyListMessage = styled.p`
  margin-top: 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  color: #828282;
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
  padding: 0 14px;
  margin-bottom: 24px;
  color: ${p => p.theme.colors.mainLight};
  background-color: ${p => p.theme.colors.mainAccent};
  @media screen and (min-width: 768px) {
    height: 58px;
    padding: 0 32px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
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
