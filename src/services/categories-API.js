import axios from 'axios';

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

export const fetchRecipesByFourCategory = async (count = 1) => {
  try {
    const data = await axios.get(`/recipes?count=${count}`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
