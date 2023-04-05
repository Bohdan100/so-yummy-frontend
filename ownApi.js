import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-98ev.onrender.com';

export const getOwnRecipesAPI = (page, limit) => {
  if (page && limit) {
    return axios
      .get(`/api/ownRecipe?page=${page}&per_page=${limit}`)
      .then(({ data }) => {
        console.log('data', data);
        return data;
      });
  }
  return axios.get(`/ownRecipe`).then(({ data }) => {
    return data;
  });
};

getOwnRecipesAPI();

export const addOwnRecipeAPI = body => {
  return axios.post('/ownRecipe', body).then(({ data }) => {
    return data;
  });
};

export const deleteOwnRecipeAPI = recipeId => {
  return axios.delete(`/ownRecipe/${recipeId}`).then(({ data }) => {
    return data;
  });
};
