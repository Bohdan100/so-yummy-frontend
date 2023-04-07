import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getProducts,
  addProductAPI,
  deleteProductAPI,
} from 'services/products-API';

export const fetchProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getProducts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (body, { rejectWithValue }) => {
    try {
      console.log(body);
      const data = await addProductAPI(body);
      console.log('datac reateAsyncThunk', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteProductAPI(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
