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
    [approveUser.pending]: (state) => {
      state.isLoading = true;
    },
    [approveUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      const filteredList = state.waitingList.filter(
        (item) => item.id !== action.payload.user.id,
      );
      state.waitingList = filteredList;
      state.approvedList.push(action.payload.user);
      console.log('lost myself there', state.waitingList);
    },
    [approveUser.rejected]: (state, action) => {
      state.isLoading = false;
      return action.payload.message;
    },
    [rejectUser.pending]: (state) => {
      state.isLoading = true;
    },
    [rejectUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      const filteredList = state.waitingList.filter(
        (item) => item.id !== action.payload.user.id,
      );
      state.waitingList = filteredList;
      state.rejectedList.push(action.payload.user);
    },
    [rejectUser.rejected]: (state, action) => {
      state.isLoading = false;
      return action.payload.message;
    },
  },
});

export default adminSlice.reducer;
