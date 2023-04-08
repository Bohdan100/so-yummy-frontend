import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUser,
  loginUser,
  logoutUser,
  refreshUser,
  setAuthHeader,
  clearAuthHeader,
  updateUserInfo,
} from 'services/auth-API';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await createUser(credentials);
      setAuthHeader(res.data.token);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.status || 500);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await loginUser(credentials);
      setAuthHeader(res.data.token);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.status || 500);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const res = await logoutUser();
    clearAuthHeader();
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.status || 500);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth;
  if (!token) {
    return thunkAPI.rejectWithValue();
  }
  try {
    setAuthHeader(token);
    const { data } = await refreshUser();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk(
  '/auth/update',
  async (credentials, thunkAPI) => {
    try {
      const data = await updateUserInfo(credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
