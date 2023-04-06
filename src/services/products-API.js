import axios from 'axios';

export const getProducts = async () => {
  const { data } = await axios.get('/shopping-list');
  return data;
};
