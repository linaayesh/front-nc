/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, googleLogin } from './thunk';

const initialState = {
  auth: {
    id: null,
    username: null,
    email: null,
    userRoleId: null,
    isLoggedIn: false,
  },
  data: null,
  error: null,
  isLoading: false,
};

const extraReducers = (builder) => {
  builder
    .addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.auth = action.payload.payload;
      state.data = action.payload.message;
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload.message;
      state.isLoading = false;
    });

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

  builder
    .addCase(googleLogin.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(googleLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.auth = action.payload.payload;
      state.data = action.payload.message;
    })
    .addCase(googleLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
};

export const checkAuthSlice = createSlice({
  name: 'checkAuth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
  extraReducers: (builder) => extraReducers(builder),
});

export const { setAuth } = checkAuthSlice.actions;

export default checkAuthSlice.reducer;
