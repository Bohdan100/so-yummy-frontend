import { Link } from 'react-router-dom';
import {
  RecipeCardImg,
  RecipeCardWrapper,
  RecipeTitle,
  TitleWrapper,
} from './RecipeCard.styled';

const RecipeCard = ({ recipe }) => {
  return (
    <RecipeCardWrapper>
      <Link to={`/recipes/640cd5ac2d9fecf12e8897fc`}>
        <RecipeCardImg
          src="https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/huqdxgwkvbhsfjqtexsm.jpg"
          alt="Spaghetti Bolognese"
        />
        <TitleWrapper>
          <RecipeTitle>Spaghetti Bolognese</RecipeTitle>
        </TitleWrapper>
      </Link>
    </RecipeCardWrapper>
  );
};

export default RecipeCard;
