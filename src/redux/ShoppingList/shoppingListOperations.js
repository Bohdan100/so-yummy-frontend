import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getProducts
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
