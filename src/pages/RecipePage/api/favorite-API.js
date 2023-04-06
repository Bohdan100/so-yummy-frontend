import axios from 'axios';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZDVmYTVjZmIwNDI2YmFmZGQ3ZiIsImlhdCI6MTY4MDc2ODM1MSwiZXhwIjoxNjgwODU0NzUxfQ.e-WCqasd0HpXjEV0nduynumV2POg2yWkfwKVA5faLIY';

axios.defaults.baseURL = 'https://so-yummy-98ev.onrender.com/api/';
const config = {
  headers: { Authorization: 'Bearer ' + token },
};

// API запит на отримання рецепту по ID

export const fetchOneRacipes = async id => {
  const url = `recipes/${id}`;
  const { data } = await axios.get(url, config);
  return data;
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
  console.log('відправив запит на бек');
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
