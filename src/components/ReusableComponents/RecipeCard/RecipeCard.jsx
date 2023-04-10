import {
  RecipeCardImg,
  RecipeCardWrapper,
  RecipeTitle,
  TitleWrapper,
  RecipeLink,
} from './RecipeCard.styled';

const RecipeCard = ({ dish }) => {
  const { _id: id, title, preview } = dish;

  return (
    <RecipeCardWrapper>
      <RecipeLink to={`/recipes/${id}`}>
        <RecipeCardImg src={preview} alt={title} />
        <TitleWrapper>
          <RecipeTitle>{title}</RecipeTitle>
        </TitleWrapper>
      </RecipeLink>
    </RecipeCardWrapper>
  );
};

export default RecipeCard;
