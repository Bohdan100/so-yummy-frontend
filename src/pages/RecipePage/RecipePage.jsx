// import { useParams } from 'react-router-dom';

import MainContainer from 'components/MainContainer/MainContainer';
import RecipePageHero from 'components/RecipePageHero';
import RecipeInngredientsList from 'components/RecipeInngredientsList';
import RecipePreparation from 'components/RecipePreparation';

const RecipePage = () => {
  // потрібно взяти айді рецепту з рядка запиту через хук useParams
  // const { recipeId } = useParams();

  // потрібно зробити запит в глобальний стейт

  return (
    <>
      <RecipePageHero
      // передати пропом обєкт з даними по рецепту
      />
      <MainContainer>
        <div>
          <p>Ingridients</p>
          <p>Numper</p>
          <p>Add to list</p>
        </div>

        <RecipeInngredientsList
        // передаю пропом інгрідієнти рецепту та айді рецепту
        />
        <RecipePreparation
        //передаю пропом посилання на картинку рецепту та опис рецепту
        />
      </MainContainer>
    </>
  );
};

export default RecipePage;
