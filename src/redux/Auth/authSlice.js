import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, login, logout, refresh, updateUser } from './authOperations';

const extraActions = [register, login, logout];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const authFulfilledReducer = (state, action) => {
  state.user = action.payload.data.user;
  state.token = action.payload.data.token;
  state.isLoggedIn = true;
  state.isLoading = false;
};
const logoutFulfilledReducer = state => {
  state.user = { name: null, email: null, avatar: null };
  state.isLoggedIn = false;
  state.token = null;
  state.isLoading = false;
  state.error = null;
};
const refreshFulfilledReducer = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.isLoading = false;
};
const refreshPendingReducer = state => {
  state.isRefreshing = true;
};
const refreshRejectedReducer = state => {
  state.isRefreshing = false;
};

const updateUserFullfilledReducer = (state, action) => {
  console.log('action.payload в updateUserFullfilledReducer', action.payload);
  state.user.name = action.payload.data.user.name;
  state.user.avatar = action.payload.data.user.avatar;
};
const anyPendingReducer = state => {
  state.isLoading = true;
};
const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload?.message || action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
      avatar: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
    theme: 'Dark',
  },
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(refresh.pending, refreshPendingReducer)
      .addCase(refresh.rejected, refreshRejectedReducer)
      .addCase(refresh.fulfilled, refreshFulfilledReducer)
      .addCase(logout.fulfilled, logoutFulfilledReducer)
      .addCase(updateUser.fulfilled, updateUserFullfilledReducer)
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled),
        authFulfilledReducer
      )
      .addMatcher(getActions('pending'), anyPendingReducer)
      .addMatcher(getActions('rejected'), anyRejectedReducer),
});

export const authReducer = authSlice.reducer;
export const { setTheme } = authSlice.actions;
