import axios from 'axios';
axios.defaults.baseURL = 'https://so-yummy-98ev.onrender.com/api';

export const getProducts = async () => {
  const { data } = await axios.get('/shopping-list');
  return data;
};

export const addProductAPI = async body => {
  const { data } = await axios.post('/shopping-list', body);
  return data;
};

export const deleteProductAPI = async id => {
  const { data } = await axios.delete(`/shopping-list/${id}`);
  return data;
};
