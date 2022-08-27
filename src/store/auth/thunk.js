import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from 'services';

export const getUser = createAsyncThunk(
  'user/getUser',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await userService.getUser();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await userService.loginUser(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await userService.logoutUser();
      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const googleLogin = createAsyncThunk(
  'user/googleLogin',
  async ({ method, tokenId }, { rejectWithValue }) => {
    try {
      const { data } = await userService.googleLogin(method, tokenId);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
