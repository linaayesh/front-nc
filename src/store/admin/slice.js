/* eslint-disable no-param-reassign */ // -> Disabled as Redux toolkit uses Immer to mutate state|
// visit https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice for more details.

import { createSlice } from '@reduxjs/toolkit';
import {
  getWaitingList,
  getApprovedList,
  getRejectedList,
  approveUser,
  rejectUser,
  createUser,
} from './thunk';

const initialState = {
  waitingList: [],
  approvedList: [],
  rejectedList: [],
  isLoading: false,
};

const extraReducers = (builder) => {
  builder
    .addCase(createUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.approvedList.push(action.payload.user);
    })
    .addCase(createUser.rejected, (state) => {
      state.isLoading = false;
    });

  builder
    .addCase(getWaitingList.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getWaitingList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.waitingList = action.payload;
    })
    .addCase(getWaitingList.rejected, (state) => {
      state.isLoading = false;
    });

  builder
    .addCase(getApprovedList.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getApprovedList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.approvedList = action.payload;
    })
    .addCase(getApprovedList.rejected, (state, action) => {
      state.isLoading = false;
      return action.payload;
    });

  builder
    .addCase(getRejectedList.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getRejectedList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.rejectedList = action.payload;
    })
    .addCase(getRejectedList.rejected, (state, action) => {
      state.isLoading = false;
      return action.payload;
    });

  builder
    .addCase(approveUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(approveUser.fulfilled, (state, action) => {
      state.isLoading = false;
      const filteredList = state.waitingList.filter(
        (item) => item.id !== action.payload.user.id,
      );
      state.waitingList = filteredList;
      state.approvedList.push(action.payload.user);
    })
    .addCase(approveUser.rejected, (state, action) => {
      state.isLoading = false;
      return action.payload;
    });

  builder
    .addCase(rejectUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(rejectUser.fulfilled, (state, action) => {
      state.isLoading = false;

      const filteredList = state.waitingList.filter(
        (item) => item.id !== action.payload.user.id,
      );
      state.waitingList = filteredList;
      state.rejectedList.push(action.payload.user);
    })
    .addCase(rejectUser.rejected, (state, action) => {
      state.isLoading = false;
      return action.payload;
    });
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => extraReducers(builder),
});

export default adminSlice.reducer;
