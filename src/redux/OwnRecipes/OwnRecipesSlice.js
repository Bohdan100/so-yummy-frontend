import { createSlice } from '@reduxjs/toolkit';
import {
  addOwnRecipe,
  getOwnRecipes,
  deleteOwnRecipe,
} from './OwnRecipesOperations';

const initialState = {
  isLoading: false,
  ownRecipes: [],
  total: 0,
};

const ownRecipesSlice = createSlice({
  name: 'ownRecipes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getOwnRecipes.fulfilled, (state, { payload }) => {
        state.ownRecipes = payload.ownRecipes;
        state.total = payload.total;
        state.isLoading = false;
      })
      .addCase(addOwnRecipe.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(deleteOwnRecipe.fulfilled, (state, { payload }) => {
        state.ownRecipes = state.ownRecipes.filter(
          recipe => recipe._id !== payload.id
        );
        state.isLoading = false;
      })
      .addCase(getOwnRecipes.pending, state => {
        state.isLoading = true;
      })
      .addCase(addOwnRecipe.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteOwnRecipe.pending, state => {
        state.isLoading = true;
      })

      .addCase(getOwnRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addOwnRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteOwnRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});
export const ownRecipesReduser = ownRecipesSlice.reducer;
