import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from 'services';

export const getUser = createAsyncThunk(
  'user/getUser',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await userService.getUsers();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await userService.loginUsers(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await userService.logoutUsers();
      console.log('this house doesnt burn down slowly', data.message);
      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const googleLogin = createAsyncThunk(
  'user/googleLogin',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await userService.googleLogins();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
