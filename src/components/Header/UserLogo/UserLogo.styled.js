import styled from 'styled-components';

export const UserButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  gap: 14px;
  padding: 6px 0;

  font-weight: ${p => p.theme.fontWeights[3]};
  font-size: 12px;
  color: ${p => p.color};
  line-height: ${p => p.theme.lineHeights.userLink};

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

export const UserAvatarImg = styled.img`
  width: 34px;
  height: 34px;
  border-radius: ${p => p.theme.radii.circle};

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
