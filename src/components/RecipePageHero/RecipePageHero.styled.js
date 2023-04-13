import styled from 'styled-components';

import mob1 from '../../images/bgPages/recipePage/recipe_hero_mob@1x.jpg';
import mob2 from '../../images/bgPages/recipePage/recipe_hero_mob@2x.jpg';
import tab1 from '../../images/bgPages/recipePage/recipe_hero_tab@1x.jpg';
import tab2 from '../../images/bgPages/recipePage/recipe_hero_tab@2x.jpg';
import desk1 from '../../images/bgPages/recipePage/recipe_hero_desktop@1x.jpg';
import desk2 from '../../images/bgPages/recipePage/recipe_hero_desktop@2x.jpg';

import { ReactComponent as ClockIcon } from '../../images/icons/clock.svg';

export const RecipeHeroConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${mob1});
  background-repeat: no-repeat;
  width: 100%;
  height: 455px;
  margin-bottom: 32px;
  padding-top: 144px;
  padding-bottom: 90px;
  background-size: 100%;
  margin-left: auto;
  margin-right: auto;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${mob2});
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[0]}) {
    width: ${p => p.theme.breakpoints[0]};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: 50px;
    padding-top: 136px;
    padding-bottom: 32px;
    width: ${p => p.theme.breakpoints[1]};
    height: 495px;
    background-image: url(${tab1});
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${tab2});
    }
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: ${p => p.theme.breakpoints[2]};
    padding-top: 164px;
    height: 493px;
    background-image: url(${desk1});
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${desk2});
    }
  }
`;
export const RecipeHeroTitle = styled.title`
  display: block;
  text-align: center;
  font-size: 24px;
  font-weight: ${p => p.theme.fontWeights[2]};
  font-size: 24px;
  line-height: ${p => p.theme.lineHeights.content};
  color: ${p => p.theme.colors.mainAccent};

  max-width: 330px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow-y: clip;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    max-width: 680px;
    font-size: 44px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    max-width: 1000px;
  }
`;

export const RecipeHeroText = styled.p`
  font-weight: ${p => p.theme.fontWeights[0]};
  text-align: center;
  font-size: 12px;
  line-height: ${p => p.theme.lineHeights.description};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  width: 303px;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow-y: clip;
  hyphens: auto;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 506px;
    font-size: 18px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    -webkit-line-clamp: 3;
    margin-bottom: 15px;
    width: 656px;
  }
`;

export const CookingTime = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  color: black;
  margin-top: 42px;
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 10px;
  line-height: ${p => p.theme.lineHeights.time};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  height: 14px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    height: 20px;
    margin-top: 60px;
    font-size: 14px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-top: 48px;
  }
`;

export const ClockIconStyled = styled(ClockIcon)`
  margin-right: 5px;
  stroke: black;
  display: inline-block;
  width: 14px;
  height: 14px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 20px;
    height: 20px;
  }
`;
