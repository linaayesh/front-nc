import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { adminService } from 'services';

export const getWaitingList = createAsyncThunk(
  'admin/getWaitingList',
  async (_params, { rejectWithValue }) => {
    try {
      const response = await adminService.getWaitingList();
      return response.data.data.map((item) => ({ ...item, key: nanoid() }));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getApprovedList = createAsyncThunk(
  'admin/getApprovedList',
  async (_params, { rejectWithValue }) => {
    try {
      const response = await adminService.getApprovedList();
      return response.data.data.map((item) => ({ ...item, key: nanoid() }));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getRejectedList = createAsyncThunk(
  'admin/getRejectedList',
  async (_params, { rejectWithValue }) => {
    try {
      const response = await adminService.getRejectedList();
      return response.data.data.map((item) => ({ ...item, key: nanoid() }));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const approveUser = createAsyncThunk(
  'admin/approveUser',
  async (user, { rejectWithValue }) => {
    try {
      const approvePromise = await adminService.approveUser(user.id);
      return { message: approvePromise.data, user };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const rejectUser = createAsyncThunk(
  'admin/rejectUser',
  async (user, { rejectWithValue }) => {
    try {
      const rejectPromise = await adminService.rejectUser(user.id);
      return { message: rejectPromise.data, user };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
