import styled from 'styled-components';

import { ReactComponent as DelIcon } from '../../images/icons/del-ing.svg';

export const IngredientItem = styled.li`
  display: flex;
  align-items: start;
  padding: 0px 16px 24px 16px;
  border-bottom: ${p => p.theme.borders.productListBorder};

  @media screen and (${p => p.theme.breakpoints[1]}) {
    padding: 32px 42px;
  }
  @media screen and (${p => p.theme.breakpoints[2]}) {
    padding: 50px 146px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  background-color: ${p => p.theme.colors.ingredientsBgrCol};
  border-radius: 6px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-right: 16px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-right: 16px;
  }

  & img {
    border-radius: ${p => p.theme.radii.image};
    width: 48px;
    height: 48px;
    object-fit: cover;
    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      width: 81px;
      height: 81px;
    }
    @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
      width: 120px;
      height: 120px;
    }
  }
`;
export const TextContainer = styled.div`
  display: flex;
  max-width: 114px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    max-width: 208px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    max-width: 547px;
  }
`;

export const NameIngredient = styled.p`
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 10px;
  line-height: ${p => p.theme.lineHeights.btnText};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.mainDark};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 16px;
    line-height: ${p => p.theme.lineHeights.time};
  }
`;

export const WeighIngredient = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: auto;
  padding: 4px;
  min-width: 37px;
  max-width: 70px;
  border-radius: ${p => p.theme.radii.btnIcon};
  background: ${p => p.theme.colors.mainAccent};
  font-weight: ${p => p.theme.fontWeights[2]};
  font-size: 10px;
  line-height: ${p => p.theme.lineHeights.time};
  color: ${p => p.theme.colors.mainBtnCategoryText};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    min-width: 68px;
    max-width: 150px;
    font-size: 18px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    min-height: 35px;
  }
`;

export const DeleteButton = styled.button`
  margin-left: 46px;
  margin-right: 10px;
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  background: transparent;
  border-color: transparent;
  &:hover svg,
  &:focus svg {
    stroke: ${p => p.theme.colors.mainAccent};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 35px;
    height: 35px;
    margin-left: 110px;
    margin-right: 23px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-left: 174px;
    margin-right: 43px;
  }
`;

export const DelIconStyled = styled(DelIcon)`
  display: inline-block;
  width: 14px;
  height: 14px;
  stroke: ${p => p.theme.colors.mainBlack};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 20px;
    height: 20px;
  }
`;
