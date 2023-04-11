import axios from 'axios';

export const getPopularRecipes = async () => {
  const { data } = await axios.get('/popular-recipes');
  return data;
};
