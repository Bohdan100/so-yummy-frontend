import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-98ev.onrender.com';

export const getOwnRecipesAPI = (page, limit) => {
  if (page && limit) {
    return axios
      .get(`/ownRecipe?page=${page}&limit=${limit}`)
      .then(({ data }) => {
        return data;
      });
  }
  return axios.get(`/ownRecipe`).then(({ data }) => {
    return data;
  });
};

export const addOwnRecipeAPI = body => {
  console.log('body', body);
  return axios
    .post('http://localhost:8000/api/ownRecipe/', body)
    .then(({ data }) => {
      return data;
    });
};

export const deleteOwnRecipeAPI = recipeId => {
  return axios.delete(`/ownRecipe/${recipeId}`).then(({ data }) => {
    return recipeId;
  });
};
