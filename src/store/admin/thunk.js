import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { adminService } from 'services';

export const getWaitingList = createAsyncThunk(
  'admin/getWaitingList',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await adminService.getWaitingList();
      return data.data.map((item) => ({ ...item, key: nanoid() }));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getApprovedList = createAsyncThunk(
  'admin/getApprovedList',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await adminService.getApprovedList();
      return data.data.map((item) => ({ ...item, key: nanoid() }));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getRejectedList = createAsyncThunk(
  'admin/getRejectedList',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await adminService.getRejectedList();
      return data.data.map((item) => ({ ...item, key: nanoid() }));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const approveUser = createAsyncThunk(
  'admin/approveUser',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await adminService.approveUser(user.id);
      return { message: data, user };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const rejectUser = createAsyncThunk(
  'admin/rejectUser',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await adminService.rejectUser(user.id);
      return { message: data, user };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
