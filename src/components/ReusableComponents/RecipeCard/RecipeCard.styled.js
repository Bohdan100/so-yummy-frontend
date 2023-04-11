import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RecipeCardWrapper = styled.li`
  position: relative;
  height: 323px;
  width: 100%;
  border-radius: ${p => p.theme.radii.image};
  transition: ${p => p.theme.transitions.main};
  &:hover a {
    transform: scale(1.05);
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: calc((100% - 32px) / 2);
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: calc((100% - 42px) / 4);
  }
`;

export const RecipeCardImg = styled.img`
  height: 323px;
  width: 343px;
  border-radius: ${p => p.theme.radii.image};
  object-fit: cover;
  transition: ${p => p.theme.transitions.main};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 336px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 300px;
  }
`;

export const TitleWrapper = styled.div`
  max-width: 307px;
  margin-right: 30px;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.mainWhite};
  transform: translateY(-4em) translateX(1em);

  @media screen and (min-width: ${p => p.theme.breakpoints[0]}) {
    margin-right: 20px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 300px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 268px;
  }
`;

export const RecipeTitle = styled.p`
  width: calc(100% - 36px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.description};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  padding: 16px;
  color: ${p => p.theme.colors.mainHeaderText};
`;

export const RecipeLink = styled(Link)`
  height: 323px;
  width: 343px;
  display: block;
  overflow: hidden;
  transition: ${p => p.theme.transitions.main};

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 336px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 300px;
  }
`;
