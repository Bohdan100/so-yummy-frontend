import axios from 'axios';

// API запит на отримання всіх категорій
export const fetchAllCategories = async () => {
  try {
    const { data } = await axios.get(`/recipes/category-list`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

// API запит на отримання рецептів по категорії  категорій
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

//  API запит на отримання рецептів по 4 категоріях
// ? Імпортуємо API для запиту
// import * as API from '../../../services/categories-API';
// ? В useEffect прописуємо запит наступним чином
// const {
//   data: { recipes },
// } = await API.fetchRecipesByFourCategory();
// ? Консолимо відповідь
// console.log(recipes);
// ? Результат, кількість рецептів по категоріях залежить від переданого count
// {breakfast: { { } },
//  dessert: { { } },
//  miscellaneous: { { } },
//  vegan: { { } }

export const fetchRecipesByFourCategory = async (count = 1) => {
  try {
    const data = await axios.get(`/recipes?count=${count}`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
