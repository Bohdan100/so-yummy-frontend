import styled from 'styled-components';

import { ReactComponent as PickIcon } from '../../images/icons/close-20.svg';

export const IngredientItem = styled.li`
  border-radius: ${li => li.theme.radii.image};
  background-color: ${li => li.theme.colors.secondaryAccent};
  border-bottom: 2px solid rgba(126, 126, 126, 0.5);
`;

export const IngredientItemWrapper = styled.label`
  display: flex;
  align-items: start;
  padding: 29px 22px;
  background: ${p => p.theme.colors.mainWhite};
  &:hover {
    cursor: pointer;
  }
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
  color: ${p => p.theme.colors.mainWhite};
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
  margin-left: 39px;
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${p => p.theme.colors.mainWhite};
  border-color: transparent;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 35px;
    height: 35px;
    margin-left: 78px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-left: 151px;
  }
`;

export const PickIconStyled = styled(PickIcon)`
  display: inline-block;
  width: 9px;
  height: 9px;
  color: ${p => p.theme.colors.mainWhite};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 17px;
    height: 17px;
  }
`;
