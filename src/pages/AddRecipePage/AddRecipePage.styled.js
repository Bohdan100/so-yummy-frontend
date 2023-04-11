import styled from 'styled-components';

export const MainWrapper = styled.div`
  margin-top: 72px;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
    margin-bottom: 200px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const FollowUsTitle = styled.h4`
  font-weight: ${p => p.theme.fontWeights[2]};
  font-size: 24px;
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.secondaryDark};
`;

export const FollowUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;
  margin-bottom: 100px;
`;
