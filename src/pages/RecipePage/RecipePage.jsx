import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import MainContainer from 'components/MainContainer/MainContainer';
import RecipePageHero from 'components/RecipePageHero';
import RecipeIngredientsList from 'components/RecipeIngredientsList';
import RecipePreparation from 'components/RecipePreparation';
import Loader from 'components/Loader/Loader';

import { HeaderTable, RecipePageStyled } from './RecipePage.styled';

import * as API from '../../services/favorite-API';

const RecipePage = () => {
  const [recipeObj, setRecipeObj] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { recipeId } = useParams();
  const { t } = useTranslation();

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
    <RecipePageStyled>
      {error && (
        <p>
          {t('recipePage.errorText')} {error.message}
        </p>
      )}
      {isLoading && <Loader />}

      {recipeObj && (
        <>
          <RecipePageHero recipeObj={recipeObj} recipeId={recipeId} />

          <MainContainer>
            <HeaderTable>
              <p>{t('recipePage.ingridients')}</p>
              <p>
                {t('recipePage.number')}
                <span>{t('recipePage.addToList')}</span>
              </p>
            </HeaderTable>

            <RecipeIngredientsList
              ingredients={recipeObj.ingredients}
              recipeId={recipeId}
            />
            <RecipePreparation
              image={recipeObj.thumb}
              instructions={recipeObj.instructions}
            />
          </MainContainer>
        </>
      )}
    </RecipePageStyled>
  );
};

export default RecipePage;
