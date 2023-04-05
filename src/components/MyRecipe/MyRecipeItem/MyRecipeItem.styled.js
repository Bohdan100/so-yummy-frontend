import styled from 'styled-components';

export const Item = styled.li`
  height: 152px;
  width: 100%;
  border: 1px solid red;
  padding: 14px 9px;

  &:not(:last-child) {
    margin-bottom: 18px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: 28px 24px;
    height: 288px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    height: 404px;
  }
`;

export const ImageContainer = styled.div`
  width: 124px;
  heigth: 124px;
  border-radius: ${p => p.theme.radii.image};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 228px;
    heigth: 232px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 318px;
    heigth: 324px;
  }
`;
export const Image = styled.img`
// width: 100%;
//   width: 124px;
//   heigth: 124px;
  object-fit: cover;
//   @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
//     width: 228px;
//     heigth: 232px;
//   }
//   @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
//     width: 318px;
//     heigth: 324px;
  }
`;
export const MainBox = styled.div`
  width: 100%;
  height: 100%;
  //   position: relative;
  display: flex;
  flex-direction: row;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;

export const Container = styled.div`
  margin-left: 14px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-left: 24px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-left: 54px;
  }
`;

export const WrapperBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  //   margin-bottom: 10px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: 14px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: 10px;
  }
`;
export const TitleRecipe = styled.p`
  display: block;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 14px;
  line-height: ${p => p.theme.lineHeights.userLink};
  letter-spacing: ${p => p.theme.letterSpacings.subheader}
  color: black;
  margin: 0px;
  text-align: left;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 24px;
    line-height: ${p => p.theme.lineHeights.subheader};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: 24px;
    line-height: ${p => p.theme.lineHeights.subheader};
  }
`;
export const BtnBox = styled.div`
  position: absolute;
  right: 0;
`;

export const DeleteBtn = styled.button`
  width: 24px;
  height: 24px;
  border-radius: ${p => p.theme.radii.btnIcon};
  border: none;
  outline: none;
  padding: 5px;
  background-color: ${p => p.theme.colors.mainAccent};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 38px;
    height: 38px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 44px;
    height: 44px;
  }
`;

export const AboutRecipe = styled.p`
  display: block;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  margin-top: 14px;
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 8px;
  letter-spacing: ${p => p.theme.letterSpacings.content}
  line-height: ${p => p.theme.lineHeights.description};
  color: ${p => p.theme.colors.mainDark};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 14px;
    margin-top: 28px;
    line-height: ${p => p.theme.lineHeights.extraContent};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: 18px;
    margin-top: 40px;
    line-height: ${p => p.theme.lineHeights.content};
  }
`;
export const WrapperUp = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 24px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-top: 28px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-top: 66px;
  }
`;

export const Time = styled.p`
  display: block;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  letter-spacing: ${p => p.theme.letterSpacings.subheader}
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 10px;
  line-height: ${p => p.theme.lineHeights.time};
  color: ${p => p.theme.colors.secondaryDark};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 14px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: 14px;
  }
`;

export const BtnSee = styled.button`
  display: block;
  margin-left: 66px;
  border: none;
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
  background-color: ${p => p.theme.colors.mainAccent};
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 10px;
  line-height: ${p => p.theme.lineHeights.searchSelect};
  color: ${p => p.theme.colors.btnTextLight};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    // width: 138px;
    // height: 45px;
    // left: 282px;
    // top: 187px;
    font-size: 14px;
    margin-left: 219px;
    line-height: ${p => p.theme.lineHeights.searchSelect};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    // width: 172px;
    // height: 59px;
    // left: 656px;
    // top: 265px;
    font-size: 16px;
    margin-left: 569px;

    line-height: ${p => p.theme.lineHeights.searchSelect};
  }
`;
