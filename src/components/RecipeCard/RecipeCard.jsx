import { Link } from 'react-router-dom';
import {
  RecipeCardImg,
  RecipeCardWrapper,
  RecipeTitle,
  TitleWrapper,
} from './RecipeCard.styled';

const RecipeCard = ({ dish }) => {
  const { _id: id, title, thumb } = dish;

  return (
    <RecipeCardWrapper>
      <Link to={`/recipes/${id}`}>
        <RecipeCardImg src={thumb} alt={title} />
        <TitleWrapper>
          <RecipeTitle>{title}</RecipeTitle>
        </TitleWrapper>
      </Link>
    </RecipeCardWrapper>
  );
};

export default RecipeCard;
