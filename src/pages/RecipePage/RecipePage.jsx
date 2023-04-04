// import { useParams } from 'react-router-dom';

import MainContainer from 'components/MainContainer/MainContainer';

const RecipePage = () => {
  // потрібно взяти айді рецепту з рядка запиту через хук useParams
  // const { recipeId } = useParams();

  // потрібно зробити запит в глобальний стейт

  return (
    <MainContainer>
      <div>RecipePage</div>;
    </MainContainer>
  );
};

export default RecipePage;
