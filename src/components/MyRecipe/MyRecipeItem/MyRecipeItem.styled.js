import styled from 'styled-components';
import { ReactComponent as BtnIconDelete } from '../../../images/icons/btn-delete.svg';

export const Item = styled.li`
  height: 152px;
  padding: 14px 9px;
  background-color: ${p => p.theme.colors.recipeBlockBg}

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

export const Image = styled.img`
  display: block;
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 187px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 404px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 788px;
  }
`;

export const WrapperBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const TitleRecipe = styled.p`
  display: block;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 14px;
  line-height: ${p => p.theme.lineHeights.userLink};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
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
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${p => p.theme.colors.mainWhite};
  background-color: ${p => p.theme.colors.deleteBtnRecipe};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 38px;
    height: 38px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 44px;
    height: 44px;
    padding: 12px;
  }
  svg {
    stroke: ${p => p.theme.colors.iconDlt};
  }
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.mainWhite};
    color: ${p => p.theme.colors.mainAccent};
    border: 1px solid ${p => p.theme.colors.mainAccent};
  }
  &:hover svg,
  &:focus svg {
    stroke: ${p => p.theme.colors.mainAccent};
  }
`;

export const IconBtn = styled(BtnIconDelete)`
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 14px;
  height: 14px;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 22px;
    height: 22px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 24px;
    height: 24px;
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
  color: ${p => p.theme.colors.aboutRecipe};
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
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.mainWhite};
    color: ${p => p.theme.colors.mainAccent};
    border: 1px solid ${p => p.theme.colors.mainAccent};
  }
`;
