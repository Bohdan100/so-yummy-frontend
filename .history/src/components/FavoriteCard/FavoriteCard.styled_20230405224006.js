import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  padding: 14px;
  border-radius: 8px;

  border: 1px, solid, black;
`;

export const ImageWrapper = styled.div`
  width: 124px;
  height: 124px;
  background-color: orange;
  border: 1px, solid, red;
`;

export const InfoWrapper = styled.div`
  border: 1px, solid, orange;

  width: 173px;
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.subheader};
  color: ${p => p.theme.colors.secondaryDark};
`;
