/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth: {
    id: null,
    username: null,
    email: null,
    roleId: null,
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

// Action creators are generated for each case reducer function
export const { setAuth } = checkAuthSlice.actions;

export default checkAuthSlice.reducer;
