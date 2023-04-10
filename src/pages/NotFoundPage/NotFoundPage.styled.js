import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  padding-top: 143px;
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-top: 184px;
    padding-bottom: 204px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 236px;
    padding-bottom: 203px;
  }
`;

export const ImageCont = styled.div`
  width: 259px;
  height: 171px;
  margin: 0 auto;
  margin-top: -28px;
  @media screen and (min-width: 768px) {
    width: 498px;
    height: 327px;
    margin-top: -76px;
  }
  @media screen and (min-width: 1440px) {
    width: 498px;
    height: 331px;
    margin-top: -110px;
  }
`;

export const TextNotFound = styled.div`
  width: 206px;
  text-align: center;
  margin: 0 auto;
  margin-top: 14px;
  gap: 8px;
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: -0.02em;
    font-feature-settings: 'liga' off;
    color: ${p => p.theme.colors.mainLight};
    margin-bottom: 8px;
    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 24px;
      margin-bottom: 14px;
    }
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.02em;
    font-feature-settings: 'liga' off;
    color: ${p => p.theme.colors.mainLight};
    opacity: 0.5;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 428px;
  }
`;
