import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchProducts,
} from './shoppingListOperations';

const extraActions = [fetchProducts];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const fetchProductsFulfilledReducer = (state, action) => {
  state.items = action.payload;
};

const commonPendingReducer = state => {
  state.isLoading = true;
};

const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const anyFulfilledReducer = state => {
  state.error = null;
  state.isLoading = false;
};

const shoppingListSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchProducts.fulfilled, fetchProductsFulfilledReducer)
      .addMatcher(
        isAnyOf(fetchProducts.pending),
        commonPendingReducer
      )
      .addMatcher(getActions('rejected'), anyRejectedReducer)
      .addMatcher(getActions('fulfilled'), anyFulfilledReducer),
});

export const shoppingListReducer = shoppingListSlice.reducer;
