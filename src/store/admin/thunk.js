import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { adminService } from 'services';

export const modifiedResponse = (res) => res.data
  .map((item) => ({ ...item, key: nanoid() })) // generate unique key for each item
  .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)); // newest first

export const getWaitingList = createAsyncThunk(
  'admin/getWaitingList',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await adminService.getWaitingList();
      return modifiedResponse(data);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const getApprovedList = createAsyncThunk(
  'admin/getApprovedList',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await adminService.getApprovedList();
      return modifiedResponse(data);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const getRejectedList = createAsyncThunk(
  'admin/getRejectedList',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await adminService.getRejectedList();
      return modifiedResponse(data);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const approveUser = createAsyncThunk(
  'admin/approveUser',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await adminService.approveUser(user.id);
      return { message: data.message, user };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const rejectUser = createAsyncThunk(
  'admin/rejectUser',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await adminService.rejectUser(user.id);
      return { message: data.message, user };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const createUser = createAsyncThunk(
  'admin/createUser',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await adminService.createUser(user);
      // TODO: we should be extracting user from data.user coming from backend:
      return { message: data.message, user };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
