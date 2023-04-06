import RecipePageBtn from '../RecipePageBtn';

import {
  RecipeHeroConteiner,
  RecipeHeroTitle,
  RecipeHeroText,
  CookingTime,
  ClockIconStyled,
} from './RecipePageHero.styled';

import axios from 'axios';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmQxZmY0YmQ3MDBkZjEwZWUzN2E0OSIsImlhdCI6MTY4MDY3ODkwMCwiZXhwIjoxNjgwNzY1MzAwfQ.G84TmEKZd68ZWoInS5XAzMmfAAwvNIxCBuevJbuNwiU';

axios.defaults.baseURL = 'https://so-yummy-98ev.onrender.com/api/';
const config = {
  headers: { Authorization: 'Bearer ' + TOKEN },
};

// API запит на отримання списоку власних рецептів
export const fetchOwnRacipes = async () => {
  const url = `ownRecipe/`;
  const { data } = await axios.get(url, config);
  return data;
};

// API запит на отримання списку улюблених рецептів
export const fetchFavoriteRacipes = async () => {
  const url = `favorite/`;
  const { data } = await axios.get(url, config);
  return data;
};

// API запит на додавання рецепту до улюбленого списку
export const addRecipeTоFavorites = async id => {
  const url = `favorite/${id}`;
  const { data } = await axios.post(url, config);
  return data;
};

// API запит на видалення рецепту з улюбленого списку
export const removeRecipeFromFavorites = async id => {
  const url = `favorite/${id}`;
  const { data } = await axios.delete(url, config);
  return data;
};

const RecipePageHero = ({ recipeObj }) => {
  const { title, description, time } = recipeObj;

  return (
    <RecipeHeroConteiner>
      <RecipeHeroTitle>{title}</RecipeHeroTitle>
      <RecipeHeroText>{description}</RecipeHeroText>
      <RecipePageBtn text={'Add to favorite recipes'} />
      <RecipePageBtn text={'Remove from favorite recipes'} />

      <CookingTime>
        <ClockIconStyled />
        <span>{time + ` min`}</span>
      </CookingTime>
    </RecipeHeroConteiner>
  );
};

export default RecipePageHero;
