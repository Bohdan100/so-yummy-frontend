import axios from 'axios';

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

export const addOwnRecipeAPI = formData => {
  return axios
    .post('/ownRecipe', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(({ data }) => {
      return data;
    });
};

export const deleteOwnRecipeAPI = recipeId => {
  return axios.delete(`/ownRecipe/${recipeId}`).then(({ data }) => {
    return recipeId;
  });
};
