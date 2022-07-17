/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth: {
    id: null,
    username: null,
    email: null,
    roleId: null,
    isLoggedIn: false,

  },
};

export const checkAuthSlice = createSlice({
  name: 'checkAuth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },

  },
});

export const { setAuth } = checkAuthSlice.actions;

export default checkAuthSlice.reducer;
