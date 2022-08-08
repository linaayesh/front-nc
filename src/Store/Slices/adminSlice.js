/* eslint-disable no-param-reassign */ // -> Disabled as Redux toolkit uses Immer to mutate state|
// visit https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice

import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';

import { adminService } from 'Services';

const initialState = {
  waitingList: [],
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
  },
});

export default adminSlice.reducer;
