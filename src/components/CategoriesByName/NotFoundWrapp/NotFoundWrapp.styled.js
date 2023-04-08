import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 100px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media screen and (${p => p.theme.breakpoints[1]}) {
    gap: 32px;
    margin-bottom: 200px;
  }
`;

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[1]};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  line-height: ${p => p.theme.lineHeights.subheader};
  font-size: 14px;
  text-align: center;
  color: ${p => p.theme.colors.mainBlack};
  opacity: 0.5;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 24px;
  }
`;

export const ImgWrapper = styled.div`
  width: 208px;
  height: 133px;
  margin: 0 auto;
  margin-bottom: 24px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 350px;
    height: 225px;
    margin-bottom: 32px;
  }
`;
