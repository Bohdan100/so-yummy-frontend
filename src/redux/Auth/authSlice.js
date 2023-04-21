import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, login, logout, refresh, updateUser } from './authOperations';

const extraActions = [register, login, logout, refresh];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const authFulfilledReducer = (state, action) => {
  state.user = action.payload.data.user;
  state.token = action.payload.data.token;
};
const logoutFulfilledReducer = state => {
  state.user = { name: null, email: null, avatar: null, userId: null };
  state.token = null;
  state.error = null;
  state.isLoading = false;
};
const refreshFulfilledReducer = (state, action) => {
  state.user = action.payload;
  state.isLoading = false;
};
const updateUserFullfilledReducer = (state, action) => {
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
      userId: null,
    },
    token: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
    setGoogleAuth(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
  extraReducers: builder =>
    builder
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
export const { setError, setGoogleAuth } = authSlice.actions;
