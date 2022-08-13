import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from 'services';

export const createUser = createAsyncThunk(
  'user/createUser',
  async (userInfo, { rejectWithValue }) => {
    try {
      const { data } = await userService.createUsers(userInfo);
      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (userInfo, { rejectWithValue }) => {
    try {
      console.log('born to burn', userInfo);
      const { data } = await userService.updateUsers(userInfo);
      console.log('remember the life you had', data.message);
      return data.message;
    } catch (error) {
      console.log('comes in waves', error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

export const forgetPassword = createAsyncThunk(
  'user/forgetPassword',
  async (email, { rejectWithValue }) => {
    try {
      const { data } = await userService.forgetPasswords(email);
      return data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const resetPassword = createAsyncThunk(
  'user/resetPassword',
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await userService.resetPasswords(values);
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
      const { data } = await userService.createFinancialStatuss(financialData);
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
      const { data } = await userService.getFinancialStatuss();
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
      const { data } = await userService.updateFinancialStatuss(financialData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
