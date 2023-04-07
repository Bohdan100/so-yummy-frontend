import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-98ev.onrender.com';
// axios.defaults.baseURL = 'http://localhost:3001';

// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmYyZDg3MjY2YWM1MTVlMzhmNzYwMyIsImlhdCI6MTY4MDgxMzQ0NywiZXhwIjoxNjgwODk5ODQ3fQ.-KADeCTAkaNWXzduXOsuOu-y-UeHIJQiE3sjmguXNqM';

// const config = {
//   headers: { Authorization: 'Bearer ' + token },
// };

export const getOwnRecipesAPI = (page, limit) => {
  if (page && limit) {
    return axios
      .get(`/api/ownRecipe?page=${page}&limit=${limit}`)
      .then(({ data }) => {
        // console.log('data', data);
        return data;
      });
  }
  return axios.get(`/api/ownRecipe`).then(({ data }) => {
    return data;
  });
};

export const addOwnRecipeAPI = body => {
  return axios.post('/api/ownRecipe', body).then(({ data }) => {
    return data;
  });
};

export const deleteOwnRecipeAPI = recipeId => {
  return axios.delete(`/api/ownRecipe/${recipeId}`).then(({ data }) => {
    console.log('data', data);
    return recipeId;
  });
};
