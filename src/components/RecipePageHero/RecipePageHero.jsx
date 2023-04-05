import {
  RecipeHeroConteiner,
  RecipeHeroTitle,
  RecipeHeroText,
  CookingTime,
  ClockIconStyled,
} from './RecipePageHero.styled';

const RecipePageHero = ({ recipeObj }) => {
  const { title, description, time } = recipeObj;
  return (
    <RecipeHeroConteiner>
      <RecipeHeroTitle>{title}</RecipeHeroTitle>
      <RecipeHeroText>{description}</RecipeHeroText>
      <CookingTime>
        <ClockIconStyled />
        <span>{time + ` min`}</span>
      </CookingTime>
    </RecipeHeroConteiner>
  );
};

export default RecipePageHero;
