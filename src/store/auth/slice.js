/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { logoutUser } from './thunk';

const initialState = {
  auth: {
    id: null,
    username: null,
    email: null,
    userRoleId: null,
    isLoggedIn: false,
    isLoading: true,
  },
  data: null,
  error: null,
  isLoading: false,
};

export const checkAuthSlice = createSlice({
  name: 'checkAuth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setAuth } = checkAuthSlice.actions;

export default checkAuthSlice.reducer;
