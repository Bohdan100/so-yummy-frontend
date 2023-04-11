import axios from 'axios';

export const getAllIngredients = async () => {
  const { data } = await axios.get('ingredients/list');
  return data;
};
