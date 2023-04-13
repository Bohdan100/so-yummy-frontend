import styled from 'styled-components';

export const MainPageDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    display: flex;
    margin-right: 340px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    align-items: stretch;
    height: 736px;
  }
`;

export const MainPageH1 = styled.h1`
  margin: 68px 0px 0px 12px;
  color: ${p => p.theme.colors.mainHeaderText};
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  display: flex;
  text-align: center;
  letter-spacing: -0.005em;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-top: 140px;
    margin-left: 0;
    font-size: 72px;
    line-height: 72px;
    text-align: left;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: 100px;
    line-height: 100px;
  }
`;

export const SpanGr = styled.span`
  color: ${p => p.theme.colors.mainAccent};
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.005em;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 72px;
    line-height: 72px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: 100px;
    line-height: 100px;
  }
`;

export const MainPageText = styled.p`
  width: 248px;
  margin: 14px 40px 157px 40px;
  color: ${p => p.theme.colors.secondaryDark};
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: ${p => p.theme.letterSpacings.content};

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 362px;
    margin: 24px 0 32px;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 465px;
    margin: 14px 0 50px;
    font-size: 18px;
    line-height: 24px;
  }
`;
