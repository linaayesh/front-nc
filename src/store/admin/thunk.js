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
  async ({ user, rejectionReason }, { rejectWithValue }) => {
    try {
      const { data } = await adminService.rejectUser(user.id, rejectionReason);
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

export const updateDashboardSettings = createAsyncThunk(
  'admin/updateDashboardSettings',
  async (settings, { rejectWithValue }) => {
    try {
      const { data } = await adminService.updateDashboardSettings(settings);
      return { message: data.message, settings };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
export const geteDashboardSettings = createAsyncThunk(
  'admin/geteDashboardSettings',
  async (_params, { rejectWithValue }) => {
    try {
      const { data } = await adminService.geteDashboardSettings();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const editUserProfile = createAsyncThunk(
  'admin/editUserProfile',
  async (userInfo, { rejectWithValue }) => {
    try {
      const { data } = await adminService.editUserProfile(userInfo);
      return { message: data.message, userInfo };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
