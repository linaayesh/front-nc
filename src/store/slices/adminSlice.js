/* eslint-disable no-param-reassign */ // -> Disabled as Redux toolkit uses Immer to mutate state|
// visit https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice

import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';

import { adminService } from 'services';

const initialState = {
  waitingList: [],
  approvedList: [],
  rejectedList: [],
  isLoading: false,
};

export const getWaitingList = createAsyncThunk(
  'admin/getWaitingList',
  async (_params, { rejectWithValue }) => {
    try {
      const response = await adminService.getWaitingListService();
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
      const response = await adminService.getApprovedListService();
      return response.data.data.map((item) => ({ ...item, key: nanoid() }));
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

export const getRejectedList = createAsyncThunk(
  'admin/getRejectedList',
  async (_params, { rejectWithValue }) => {
    try {
      const response = await adminService.getRejectedListService();
      return response.data.data.map((item) => ({ ...item, key: nanoid() }));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: {
    [getWaitingList.pending]: (state) => {
      state.isLoading = true;
    },
    [getWaitingList.fulfilled]: (state, action) => {
      state.waitingList = action.payload;
      state.isLoading = false;
    },
    [getWaitingList.rejected]: (state, action) => {
      state.isLoading = false;
      return action.payload;
    },
    [getApprovedList.pending]: (state) => {
      state.isLoading = true;
    },
    [getApprovedList.fulfilled]: (state, action) => {
      state.approvedList = action.payload;
      state.isLoading = false;
    },
    [getApprovedList.rejected]: (state, action) => {
      state.isLoading = false;
      return action.payload;
    },
    [getRejectedList.pending]: (state) => {
      state.isLoading = true;
    },
    [getRejectedList.fulfilled]: (state, action) => {
      state.rejectedList = action.payload;
      state.isLoading = false;
    },
    [getRejectedList.rejected]: (state, action) => {
      state.isLoading = false;
      return action.payload;
    },
  },
});

export default adminSlice.reducer;
