import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28px;

  :not(first-child) {
    margin-bottom: 32px;
  }

  text-align: center;
  color: ${p => p.theme.oterSMlinksHover};
  background-color: ${p => p.theme.footerBg};

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    padding-top: 50px;
    text-align: center;
    :not(first-child) {
      margin-bottom: 0px;
    }
  }
  @media screen and (min-width: 1200px) {
    flex-wrap: no-wrap;
    align-items: start;

    text-align: left;
  }
`;

export const BottomText = styled.div`
  position: relative;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 28px 73px;

  /* background-image: url(../../); */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 160px 172px;

  :first-child {
    margin-right: 14px;
    font-weight: 500;
  }

  font-family: Poppins;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.01em;
  text-align: left;
  opacity: 0.5;
`;
