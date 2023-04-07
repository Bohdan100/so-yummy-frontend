import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  border-radius: 8px;
  border: 1px, solid, black;
  background-color: ${p => p.theme.colors.mainWhite};
`;

export const ImageWrapper = styled.div`
  width: 124px;
  height: 124px;
  background-color: orange;
  border: 1px, solid, red;
`;

export const InfoWrapper = styled.div`
  border: 1px, solid, orange;
  padding-left: 14px;
  width: 173px;
`;

export const Title = styled.h2`
  padding-bottom: 14px;
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.secondaryDark};
`;
export const Text = styled.p`
  font-size: 8px;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.description};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.mainDark};
`;
