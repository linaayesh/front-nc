import { createAsyncThunk } from '@reduxjs/toolkit';
import { adminService } from 'services';

export const getContentById = createAsyncThunk(
  'matchContents/getContentById',
  async (contentId, { rejectWithValue }) => {
    try {
      const { data: { data } } = await adminService.getContentById(contentId);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const getUsers = createAsyncThunk(
  'matchContents/getApprovedList',
  async (_params, { rejectWithValue }) => {
    try {
      const { data: { data } } = await adminService.getApprovedList();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const getPaginatedContent = createAsyncThunk(
  'matchContents/getPaginatedContent',
  async ({ limit, page }, { rejectWithValue }) => {
    try {
      const { data: { data } } = await adminService.getPaginatedContent({ limit, page });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const getPossibleContents = createAsyncThunk(
  'matchContents/getPossibleContents',
  async (title, { rejectWithValue }) => {
    try {
      const { data: { data } } = await adminService.getPossibleContents(title);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const matchUserContent = createAsyncThunk(
  'matchContents/matchUserContent',
  async (payload, { rejectWithValue }) => {
    try {
      const { data: { data } } = await adminService.matchUserContent(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
