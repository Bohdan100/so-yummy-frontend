import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 50px;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights[2]};
  font-size: 28px;
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  font-feature-settings: 'liga' off;
  color: ${p => p.theme.colors.sectionHeader};

  @media screen and (min-width: 768px) {
    margin-top: 72px;
    font-size: 32px;
    line-height: ${p => p.theme.lineHeights.subheader};
  }
  @media screen and (min-width: 1440px) {
    margin-top: 100px;
    font-size: 44px;
    line-height: ${p => p.theme.lineHeights.subheader};
  }
`;
