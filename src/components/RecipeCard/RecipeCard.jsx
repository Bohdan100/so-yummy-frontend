import { Link } from 'react-router-dom';
import {
  RecipeCardImg,
  RecipeCardWrapper,
  RecipeTitle,
  TitleWrapper,
} from './RecipeCard.styled';

const RecipeCard = ({ dish }) => {
  const { _id: id, title, preview } = dish;

  return (
    <RecipeCardWrapper>
      <Link to={`/recipes/${id}`}>
        <RecipeCardImg src={preview} alt={title} />
        <TitleWrapper>
          <RecipeTitle>{title}</RecipeTitle>
        </TitleWrapper>
      </Link>
    </RecipeCardWrapper>
  );
};

export default RecipeCard;
