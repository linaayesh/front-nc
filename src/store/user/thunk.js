import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from 'services';

export const createUser = createAsyncThunk(
  'user/createUser',
  async (userInfo, { rejectWithValue }) => {
    try {
      const { data } = await userService.createUser(userInfo);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getUser = createAsyncThunk(
  'user/getUser',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await userService.getUser();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (userInfo, { rejectWithValue }) => {
    try {
      const { data } = await userService.updateUser(userInfo);
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
      const { data } = await userService.loginUser(credentials);
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
      const { data } = await userService.logoutUser();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const googleLogin = createAsyncThunk(
  'user/googleLogin',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await userService.googleLogin();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const forgetPassword = createAsyncThunk(
  'user/forgetPassword',
  async (email, { rejectWithValue }) => {
    try {
      const { data } = await userService.forgetPassword(email);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const resetPassword = createAsyncThunk(
  'user/resetPassword',
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await userService.resetPassword(values);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getFinancialData = createAsyncThunk(
  'user/getFinancialData',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await userService.getFinancialData();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const createFinancialData = createAsyncThunk(
  'user/createFinancialData',
  async (financialData, { rejectWithValue }) => {
    try {
      const { data } = await userService.createFinancialData(financialData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const updateFinancialData = createAsyncThunk(
  'user/updateFinancialData',
  async (financialData, { rejectWithValue }) => {
    try {
      const { data } = await userService.updateFinancialData(financialData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
