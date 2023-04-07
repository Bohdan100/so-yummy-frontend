import styled from 'styled-components';

export const Div = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.015em;
  color: ${p => p.theme.colors.mainWhite};

  @media screen and (min-width: 768px) {
    justify-content: start;
    font-size: 28px;
    line-height: 28px;
  }
`;

export const Title = styled.span`
  margin-left: 8px;

  @media (min-width: 768px) {
    margin-left: 12px;
  }
`;

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    list-style-type: disc;
    padding: 0;
    margin: 0;
    margin-top: 24px;
    padding-left: 30px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.mainWhite};
    text-align: left;

    @media screen and (min-width: 1440px) {
      margin-right: 159px;
      margin-top: 40px;
      font-size: 18px;
      line-height: 24px;
    }
  }
`;

export const Item = styled.li`
  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 1440px) {
    :not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;
export const ArticleContainer = styled.div`
  @media screen and (min-width: 1440px) {
    width: 418px;
  }
`;
