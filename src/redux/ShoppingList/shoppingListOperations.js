import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  getProducts,
  addProductAPI,
  deleteProductAPI,
} from 'services/products-API';

export const fetchProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getProducts();
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
      const data = await addProductAPI(body);

      toast.success(
        `Ingredient ${body.strIngredient}  is added to the shopping list`
      );
      return data;
    } catch (error) {
      toast.error(`Something went wrong. Try again...`);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id, { rejectWithValue }) => {
    try {
      console.log('createAsyncThunk id', id);
      const data = await deleteProductAPI(id);
      toast.success(`The  ingredient has been removed from the shopping list`);
      return data;
    } catch (error) {
      toast.error(`Something went wrong. Try again...`);
      return rejectWithValue(error.message);
    }
  }
);
