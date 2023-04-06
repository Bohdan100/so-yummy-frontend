import { useState, useEffect } from 'react';
import * as API from '../../pages/RecipePage/api/favorite-API';

import RecipePageBtn from '../RecipePageBtn';

import {
  RecipeHeroConteiner,
  RecipeHeroTitle,
  RecipeHeroText,
  CookingTime,
  ClockIconStyled,
} from './RecipePageHero.styled';

const RecipePageHero = ({ recipeObj, recipeId }) => {
  const [isOwn, setIsOwn] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { title, description, time } = recipeObj;

  async function delFromFavorite() {
    try {
      console.log('жмакнув на кнопку видалити в улюблені');
      setIsLoading(true);

      await API.removeRecipeFromFavorites(recipeId);
      setIsFavorite(false);
    } catch (error) {
      setError({ error });
    } finally {
      setIsLoading(false);
    }

    return;
  }

  async function addToFavorite() {
    try {
      console.log('жмакнув на кнопку додати в улюблені');
      setIsLoading(true);
      await API.addRecipeTоFavorites(recipeId);
      setIsFavorite(true);
    } catch (error) {
      setError({ error });
    } finally {
      setIsLoading(false);
    }

    return;
  }

  useEffect(() => {
    // отримую список власних рецептів та перевіряю чи є рецепт в в списку власних рецептів
    async function getOwnRacipes() {
      try {
        setIsLoading(true);
        const { data } = await API.fetchOwnRacipes();
        console.log('список власних рецептів', data.result);

        if (data.result !== undefined) {
          const recipe = data.result.some(recipe => recipe === recipeId);
          console.log(
            'перевірка рецепту на наявність в списку власних рецептів',
            recipe
          );
          setIsOwn(recipe);
        }
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    }

    getOwnRacipes();

    // отримую список  рецептів зі favorite списку та перевіряю чи є рецепт в favorite списку
    async function getFavoriteRacipes() {
      try {
        setIsLoading(true);
        const { data } = await API.fetchFavoriteRacipes();

        console.log('список улюблених рецептів', data.result);
        console.log(recipeId);

        if (data.result !== undefined) {
          const recipe = data.result.some(el => el.recipe._id === recipeId);

          console.log(
            'перевірка рецепту на наявність в списку улюблених рецептів',
            recipe
          );
          setIsFavorite(recipe);
        }
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    }

    getFavoriteRacipes();
  }, [recipeId]);

  return (
    <RecipeHeroConteiner>
      <RecipeHeroTitle>{title}</RecipeHeroTitle>
      <RecipeHeroText>{description}</RecipeHeroText>

      {!isOwn && isFavorite && (
        <RecipePageBtn
          text={'Remove from favorite recipes'}
          fn={delFromFavorite}
        />
      )}

      {!isOwn && !isFavorite && (
        <RecipePageBtn text={'Add to favorite recipes'} fn={addToFavorite} />
      )}

      <CookingTime>
        <ClockIconStyled />
        <span>{time + ` min`}</span>
      </CookingTime>
    </RecipeHeroConteiner>
  );
};

export default RecipePageHero;
