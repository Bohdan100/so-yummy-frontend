import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PopularRecipesWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    width: 319px;
  }
`;

export const Title = styled.h3`
  font-weight: ${p => p.theme.fontWeights[2]};
  font-size: 24px;
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.secondaryDark};
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const PopularRecipesList = styled.ul`
  @media screen and (max-width: 767px) {
    width: 343px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;

export const PopularRecipeItem = styled.li`
  position: relative;
  padding-bottom: 13px;
  padding-right: 14px;
  border-bottom: ${p => p.theme.borders.popularRecipe};
  height: 98px;

  &:hover {
    -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000,
      -9px -6px 27px -2px rgba(35, 196, 49, 0.339);
    box-shadow: 5px 5px 5px 0px rgba(155, 191, 56, 0.253),
      inset 4px 4px 15px 0px rgba(139, 170, 54, 0.678),
      -9px -6px 27px -2px rgba(139, 170, 54, 0.018);
  }

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    &:nth-last-child(-n + 2) {
      display: none;
    }
  }

  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;
export const LinkToRecipe = styled(Link)`
  display: flex;

  gap: 12px;
`;

export const ImgWrapper = styled.div`
  width: 104px;
  height: 85px;
  border-radius: ${p => p.theme.radii.image};
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 102px;
  }
  @media screen and (min-width: 1440px) {
    width: 97px;
  }
`;

export const TextWrapper = styled.div`
  width: 213px;

  @media screen and (min-width: 768px) {
    width: 209px;
  }

  @media screen and (min-width: 1440px) {
    width: 198px;
  }
`;

export const ItemTitle = styled.h4`
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.description};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.secondaryDark};
  margin-bottom: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const TextDescription = styled.p`
  font-size: 12px;
  line-height: ${p => p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.descriptionPopularRecipeText};
`;
