import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import * as API from '../../services/favorite-API';

import RecipePageBtn from '../RecipePageBtn';
// import Loader from 'components/Loader/Loader';

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

  const { title, description, time } = recipeObj;

  async function delFromFavorite() {
    try {
      await API.removeRecipeFromFavorites(recipeId);
      setIsFavorite(false);
      toast.success(
        `Recipe ${title}  has been removed from the list of favorites`
      );
    } catch (error) {
      toast.error(`Something went wrong. Try again...`);
    }

    return;
  }

  async function addToFavorite() {
    try {
      await API.addRecipeTоFavorites(recipeId);
      setIsFavorite(true);
      toast.success(`Recipe ${title}  is added to the list of favorites`);
    } catch (error) {
      toast.error(`Something went wrong. Try again...`);
    }

    return;
  }

  useEffect(() => {
    async function getOwnRacipes() {
      try {
        const { data } = await API.fetchOwnRacipes();

        if (data.result !== undefined) {
          const recipe = data.result.some(el => el._id === recipeId);

          setIsOwn(recipe);
        }
      } catch (error) {}
    }

    getOwnRacipes();

    async function getFavoriteRacipes() {
      try {
        const { data } = await API.fetchFavoriteRacipes(1, 50000);

        if (data.result !== undefined) {
          const recipe = data.result.some(el => el.recipe._id === recipeId);

          setIsFavorite(recipe);
        }
      } catch (error) {}
    }

    getFavoriteRacipes();
  }, [recipeId]);

  return (
    <>
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
    </>
  );
};

export default RecipePageHero;
