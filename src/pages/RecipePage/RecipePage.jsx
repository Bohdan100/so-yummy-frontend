import { useState, useEffect } from 'react';

// import { useParams } from 'react-router-dom';

import MainContainer from 'components/MainContainer/MainContainer';
import RecipePageHero from 'components/RecipePageHero';
import RecipeIngredientsList from 'components/RecipeIngredientsList';
import RecipePreparation from 'components/RecipePreparation';
import Loader from 'components/Loader/Loader';

import { HeaderTable } from './RecipePage.styled';

import * as API from '../../services/favorite-API';

const RecipePage = () => {
  const [recipeObj, setRecipeObj] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const { recipeId } = useParams();
  // const recipeId = '640cd5ac2d9fecf12e8897f2';
  const recipeId = '640cd5ac2d9fecf12e8897f3';

  useEffect(() => {
    async function getOneRecipe() {
      try {
        setIsLoading(true);
        const { recipe } = await API.fetchOneRacipes(recipeId);
        setRecipeObj(recipe);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    }

    getOneRecipe();
  }, [recipeId]);

  return (
    <>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}

      {recipeObj && (
        <>
          <RecipePageHero recipeObj={recipeObj} recipeId={recipeId} />

          <MainContainer>
            <HeaderTable>
              <p>Ingridients</p>
              <p>
                Number <span>Add to list</span>
              </p>
            </HeaderTable>

            <RecipeIngredientsList ingredients={recipeObj.ingredients} />
            <RecipePreparation
              image={recipeObj.thumb}
              instructions={recipeObj.instructions}
              //передаю пропом посилання на картинку рецепту та опис рецепту
            />
          </MainContainer>
        </>
      )}
    </>
  );
};

export default RecipePage;
