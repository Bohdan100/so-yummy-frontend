import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchFavorites,
  addFavorite,
  deleteFavorite,
} from './favoritesOperations';

import { logout } from '../Auth/authOperations';

const extraActions = [fetchFavorites, addFavorite, deleteFavorite, logout];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const fetchFavoritesFulfilledReducer = (state, action) => {
  state.items = action.payload;
};

const commonPendingReducer = state => {
  state.isLoading = true;
};

const addFavoriteFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const deleteFavoriteFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(index, 1);
};

const logoutFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
  state.items = [];
};

const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const anyFulfilledReducer = state => {
  state.error = null;
  state.isLoading = false;
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchFavorites.fulfilled, fetchFavoritesFulfilledReducer)
      .addCase(addFavorite.fulfilled, addFavoriteFulfilledReducer)
      .addCase(deleteFavorite.fulfilled, deleteFavoriteFulfilledReducer)
      .addCase(logout.fulfilled, logoutFulfilledReducer)
      .addMatcher(
        isAnyOf(
          fetchFavorites.pending,
          logout.pending
        ),
        commonPendingReducer
      )
      .addMatcher(getActions('rejected'), anyRejectedReducer)
      .addMatcher(getActions('fulfilled'), anyFulfilledReducer),
});

export const favoritesReducer = favoritesSlice.reducer;