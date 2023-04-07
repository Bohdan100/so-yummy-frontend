import styled from 'styled-components';
import { ReactComponent as BtnIconDelete } from '../../../images/icons/btn-delete-recipe.svg';

export const Item = styled.li`
  height: 152px;
  // width: 100%;
  // border: 2px solid red;
  padding: 14px 9px;
  background-color: ${p => p.theme.colors.mainWhite}

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

// export const ImageContainer = styled.div`
//   border: 2px solid green;
//   border-radius: ${p => p.theme.radii.image};
//   object-fit: cover;

//   // width: 100%;
//   // width: 124px;
//   // heigth: 124px;

//   @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
//     // width: 228px;
//     // heigth: 232px;
//   }
//   @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
//     // width: 318px;
//     // heigth: 324px;
//   }
// `;
export const Image = styled.img`
  // border: 2px solid red;
  display: block;
  // max-width: 100%;
  height: auto;
  border-radius: ${p => p.theme.radii.image};
  object-fit: cover;
  width: 124px;
  heigth: 124px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 228px;
    heigth: 232px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 318px;
    heigth: 324px;
  }
`;
export const MainBox = styled.div`
  // border: 2px solid purple;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 187px;
  // border: 2px solid blue;
  // margin-left: 14px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    // margin-left: 24px;
    width: 404px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    // margin-left: 54px;
    width: 788px;
  }
`;

export const WrapperBox = styled.div`
  position: relative;
  // border: 2px solid pink;

  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  align-items: flex-start;
  // margin-bottom: 10px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    // margin-bottom: 14px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    // margin-bottom: 10px;
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
  color: ${p => p.theme.colors.secondaryDark};
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
  display: flex;
  width: 24px;
  height: 24px;
  border-radius: ${p => p.theme.radii.btnIcon};
  border: none;
  outline: none;
  padding: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;

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

export const IconBtn = styled(BtnIconDelete)`
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 14px;
  height: 14px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 17px;
    height: 18px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 18px;
    height: 20px;
  }
`;

export const AboutRecipe = styled.p`
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
  // border: 2px solid green;

  flex-grow: 2;
  justify-content: space-between;
  align-items: flex-end;
  // margin-top: 24px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    // margin-top: 28px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    // margin-top: 66px;
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
  width: 87px;
  height: 27px;
  left: 100px;
  top: 97px;
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
    width: 138px;
    height: 45px;
    left: 282px;
    top: 187px;
    font-size: 14px;
    margin-left: 219px;
    line-height: ${p => p.theme.lineHeights.searchSelect};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 172px;
    height: 59px;
    left: 656px;
    top: 265px;
    font-size: 16px;
    margin-left: 569px;

    line-height: ${p => p.theme.lineHeights.searchSelect};
  }
  &:hover {
    background-color: ${p => p.theme.colors.mainWhite};
    color: ${p => p.theme.colors.mainAccent};
    border: 1px solid ${p => p.theme.colors.mainAccent};
  }
`;
