import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import * as API from '../../services/favorite-API';
import RecipePageBtn from '../RecipePageBtn';
import { useAuth } from '../../hooks/useAuth';

import {
  RecipeHeroConteiner,
  RecipeHeroTitle,
  RecipeHeroText,
  CookingTime,
  ClockIconStyled,
} from './RecipePageHero.styled';

const RecipePageHero = ({ recipeObj, recipeId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { t } = useTranslation();

  const { title, description, time, owner } = recipeObj;
  const userId = useAuth().user.userId;
  const isOwn = owner !== undefined && owner === userId;

  async function delFromFavorite() {
    try {
      await API.removeRecipeFromFavorites(recipeId);
      setIsFavorite(false);
      toast.success(
        `Recipe ${title} has been removed from the list of favorites`
      );
    } catch (error) {
      toast.error(t('recipePageHero.error'));
    }

    return;
  }

  async function addToFavorite() {
    try {
      await API.addRecipeTоFavorites(recipeId);
      setIsFavorite(true);
      toast.success(`Recipe ${title}  is added to the list of favorites`);
    } catch (error) {
      toast.error(t('recipePageHero.error'));
    }

    return;
  }

  useEffect(() => {
    async function getIsFavorites() {
      try {
        const { data } = await API.isFavorites(recipeId);
        setIsFavorite(data.result);
      } catch (error) {}
    }

    getIsFavorites();
  }, [recipeId]);

  return (
    <>
      <RecipeHeroConteiner>
        <RecipeHeroTitle>{title}</RecipeHeroTitle>
        <RecipeHeroText>{description}</RecipeHeroText>

        {!isOwn && isFavorite && (
          <RecipePageBtn
            text={t('recipePageHero.removeTextBtn')}
            fn={delFromFavorite}
          />
        )}

        {!isOwn && !isFavorite && (
          <RecipePageBtn
            text={t('recipePageHero.addTextBtn')}
            fn={addToFavorite}
          />
        )}

        <CookingTime>
          <ClockIconStyled />
          <span>{time + `${t('recipePageHero.time')}`}</span>
        </CookingTime>
      </RecipeHeroConteiner>
    </>
  );
};

export default RecipePageHero;
