import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-98ev.onrender.com/api/';

export const fetchAllCategories = async () => {
  try {
    const { data } = await axios.get(`/recipes/category-list`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const fetchRecipesByCategory = async (
  categoryName,
  limit = 8,
  page = 1
) => {
  try {
    const data = await axios.get(
      `/recipes/categories/${categoryName}?limit=${limit}&page=${page}`
    );
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
