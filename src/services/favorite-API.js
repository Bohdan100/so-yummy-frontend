import axios from 'axios';

// API запит на отримання рецепту по ID
export const fetchOneRacipes = async id => {
  const url = `/recipes/${id}`;
  const { data } = await axios.get(url);
  return data;
};

// API запит на отримання списоку власних рецептів
export const fetchOwnRacipes = async () => {
  const url = `/ownRecipe/`;
  const { data } = await axios.get(url);
  return data;
};

// API запит на отримання списку улюблених рецептів
export const fetchFavoriteRacipes = async (page, limit) => {
  const url = `/favorite`;
  const { data } = await axios.get(`${url}?page=${page}&limit=${limit}`);
  return data;
};

// API запит на додавання рецепту до улюбленого списку
export const addRecipeTоFavorites = async id => {
  const url = `/favorite/${id}`;
  const { data } = await axios.post(url);
  return data;
};

// API запит на видалення рецепту з улюбленого списку
export const removeRecipeFromFavorites = async id => {
  const url = `/favorite/${id}`;
  const { data } = await axios.delete(url);
  return data;
};

// API запит на перевірку чи належить рецепт користувачу
export const isFavorites = async id => {
  const url = `favorite/${id}`;
  const { data } = await axios.get(url);
  return data;
};
