import axios from 'axios';

export const getProducts = async () => {
  const { data } = await axios.get('/shopping-list');
  return data;
};

export const addProductAPI = async () => {
  const { data } = await axios.post('/shopping-list');
  return data;
};

export const deleteProductAPI = async id => {
  const { data } = await axios.delete(`/shopping-list/${id}`);
  return data;
};
