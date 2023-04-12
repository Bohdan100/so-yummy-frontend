import axios from 'axios';
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmVlODlkOTYzMzIyNjQyNDI2OWE2MyIsImlhdCI6MTY4MDc5NTgwNSwiZXhwIjoxNjgwODgyMjA1fQ.4QOpOIoAbSZz1cFG1_UZ3P5lqzfBToRJq231QAuA0Vw';

// const config = {
//   headers: { Authorization: 'Bearer ' + token },
// };

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
  const { data } = await axios.get(`/favorite?page=${page}&limit=${limit}`);
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
