import axios from 'axios';

export const fetchOneRacipes = async id => {
  const url = `/recipes/${id}`;
  const { data } = await axios.get(url);
  return data;
};

export const fetchOwnRacipes = async () => {
  const url = `/ownRecipe/`;
  const { data } = await axios.get(url);
  return data;
};

export const fetchFavoriteRacipes = async (page, limit) => {
  const url = `/favorite`;
  const { data } = await axios.get(`${url}?page=${page}&limit=${limit}`);
  return data;
};

export const addRecipeTоFavorites = async id => {
  const url = `/favorite/${id}`;
  const { data } = await axios.post(url);
  return data;
};

export const removeRecipeFromFavorites = async id => {
  const url = `/favorite/${id}`;
  const { data } = await axios.delete(url);
  return data;
};

export const isFavorites = async id => {
  const url = `favorite/${id}`;
  const { data } = await axios.get(url);
  return data;
};
