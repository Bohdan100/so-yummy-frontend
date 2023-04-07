import axios from 'axios';
axios.defaults.baseURL = 'https://so-yummy-98ev.onrender.com/api';

export const getCategoryList = () => {
  return axios.get('/recipes/category-list').then(({ data }) => {
    return data;
  });
};

export const getRecipesByCategory = (categoryName, limit = 8, page = 1) => {
  return axios
    .get(`/recipes/${categoryName}?limit=${limit}&page=${page}`)
    .then(({ data }) => {
      return data;
    });
};
