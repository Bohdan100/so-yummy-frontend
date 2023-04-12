import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from '../../images/icons/btn-delete.svg';

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  border-radius: ${p => p.theme.radii.image};
  max-width: 343px;
  height: 152px;
  padding: 14px 9px;
  background-color: ${p => p.theme.colors.recipeBlockBg};
  &:not(:last-child) {
    margin-bottom: 18px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    max-width: 704px;
    height: 288px;
    padding-top: 28px;
    padding-bottom: 28px;
    padding-left: 24px;
    padding-right: 24px;
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    max-width: 1240px;
    height: 404px;
    padding: 40px;
    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 124px;
  height: 124px;
  border-radius: ${p => p.theme.radii.image};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 228px;
    height: 232px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 318px;
    height: 324px;
  }
`;
export const Img = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
  border-radius: ${p => p.theme.radii.image};
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 173px;
  margin-left: 14px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-left: 24px;
    width: auto;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-left: 40px;
    width: auto;
  }
`;

export const Title = styled.h2`
  display: block;
  padding-bottom: 14px;
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.secondaryDark};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 265px;
    font-size: 24px;
    padding-bottom: 0;
  }
`;
export const Text = styled.p`
  display: block;
  font-size: 8px;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.description};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.aboutRecipe};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 14px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: 18px;
  }
`;
export const TextWrapper = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 298px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 679px;
  }
`;
export const CookingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  /* margin-top: 25px; */
`;

export const Time = styled.span`
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 10px;
  line-height: ${p => p.theme.lineHeights.time};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.secondaryDark};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 14px;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0;
  width: 24px;
  height: 24px;
  background: ${p => p.theme.colors.secondaryAccent};
  border-radius: ${p => p.theme.radii.btnIcon};
  & svg {
    stroke: ${p => p.theme.colors.paginationText};
    width: 9px;
    height: 10px;
  }

  &:hover {
    stroke: ${p => p.theme.colors.btnTextLight};
    background-color: ${p => p.theme.colors.mainHeaderText};
    svg path {
      stroke: ${p => p.theme.colors.bodyBg};
    }
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 38px;
    height: 38px;
    margin-left: 101px;
    & svg {
      width: 24px;
      height: 24px;
    }
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 44px;
    height: 44px;
    margin-left: 493px;
  }
`;
export const IconSpan = styled.span`
  text-align: center;
  margin: 0;
  padding: 0;
`;
export const DeleteIconStyled = styled(DeleteIcon)`
  display: inline-block;
  margin: 0;
  padding: 0;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  margin-bottom: 4px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  /* align-content: space-between; */
`;
export const RecipePageBtn = styled.button`
  /* display: flex; */
  display: block;
  align-items: center;
  justify-content: center;
  /* width: fit-content; */
  width: 87px;
  height: 27px;
  white-space: nowrap;
  box-sizing: border-box;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.subheader};
  font-size: 10px;
  color: #fafafa;
  padding: 10px 18px;
  background-color: ${p => p.theme.colors.mainBTn};
  outline: none;
  border: none;
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
  text-align: center;
  cursor: pointer;
  transition: ${({ theme }) => {
    return theme.transitions.main;
  }};
  &:hover {
    color: ${p => p.theme.colors.btnTextLight};
    background-color: ${p => p.theme.colors.deleteBtnRecipe};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 138px;
    height: 45px;
    font-size: 16px;
    padding: 12px 32px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 172px;
    height: 59px;
    font-size: 16px;
    padding: 14px 38px;
  }
`;
