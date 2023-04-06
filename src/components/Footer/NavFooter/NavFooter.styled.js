import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;

  :not(:last-child) {
    margin-bottom: 14px;
  }

  .active {
    color: ${p => p.theme.footerSMlinks};
  }

  :hover,
  :focus {
    color: ${p => p.theme.footerSMlinksHover};
  }

  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 1440px) {
    :not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;
