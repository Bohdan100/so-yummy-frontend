import styled from 'styled-components';

export const RecipeCardWrapper = styled.li`
  height: 323px;
  width: 343px;
  position: relative;

  border-radius: ${p => p.theme.radii.image};

  @media (min-width: 768px) {
    width: calc((100% - 32px) / 2);
  }

  @media (min-width: 1440px) {
    width: calc((100% - 42px) / 4);
  }
`;

export const RecipeCardImg = styled.img`
  height: 323px;
  width: 100%;
  object-fit: cover;
  border-radius: ${p => p.theme.radii.image}; ;
`;

export const TitleWrapper = styled.div`
  width: 307px;
  margin-right: 20px;
  background-color: ${p => p.theme.colors.mainWhite};
  border-radius: 8px;
  transform: translateY(-4em) translateX(1em);

  @media (min-width: 768px) {
    width: 300px;
  }

  @media (min-width: 1440px) {
    width: 268px;
  }
`;

export const RecipeTitle = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: {p => p.theme.fontWeights[1]};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.description};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.mainHeaderText};
  padding: 16px;

  width: calc(100% - 36px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  :hover + ${RecipeCardWrapper} {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    text-align: center;
    max-width: 100%;
    margin-top: -25px;
    border-radius: 5px;
    padding: 4px;
    font-family: ${p => p.theme.fonts.main};
    color: ${p => p.theme.colors.mainHeaderText};
    background-color: #8baa36;

    p {
      width: 100%;
      padding: 5px;
    }

    @media (min-width: 1440px) {
      margin-top: 8px;
    }
  }
`;
