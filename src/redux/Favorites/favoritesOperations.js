import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  fetchFavoriteRacipes,
  addRecipeTоFavorites,
  removeRecipeFromFavorites,
} from 'services/favorite-API';

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchAllFavorites',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchFavoriteRacipes();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  'favorites/addFavorite',
  async (id, { rejectWithValue }) => {
    try {
      const data = await addRecipeTоFavorites(id);
      return data;
    } catch (error) {
      toast.error(`Something went wrong. Try again...`);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  'favorites/deleteFavorite',
  async (id, { rejectWithValue }) => {
    try {
      const data = await removeRecipeFromFavorites(id);
      return data;
    } catch (error) {
      toast.error(`Something went wrong. Try again...`);
      return rejectWithValue(error.message);
    }
  }
);
