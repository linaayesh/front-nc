/* eslint-disable no-param-reassign */ // -> Disabled as Redux toolkit uses Immer to mutate state|
// visit https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice for more details.

import { createSlice } from '@reduxjs/toolkit';

import { createUser } from './thunk';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },

});

export default userSlice.reducer;
