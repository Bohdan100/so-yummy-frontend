import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getOwnRecipesAPI,
  addOwnRecipeAPI,
  deleteOwnRecipeAPI,
} from './ownApi';

export const getOwnRecipes = createAsyncThunk(
  'ownRecipes/getOwnRecipes',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const data = await getOwnRecipesAPI(page ?? null, limit ?? null);
      console.log('list', data.data.result);

      return { ownRecipes: data.data.result, total: data.total };
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const addOwnRecipe = createAsyncThunk(
  'ownRecipes/addOwnRecipe',
  async ({ body, cb }, { rejectWithValue }) => {
    try {
      const data = await addOwnRecipeAPI(body);
      cb();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const deleteOwnRecipe = createAsyncThunk(
  'ownRecipes/deleteOwnRecipe',
  async (recipeId, { rejectWithValue }) => {
    try {
      const data = await deleteOwnRecipeAPI(recipeId);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
