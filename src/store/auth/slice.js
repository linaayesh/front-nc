import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_USER_STATE } from 'shared/constants';
import extraReducers from './reducers';

const initialState = {
  user: DEFAULT_USER_STATE,
  data: null,
  error: null,
  isLoading: false,
  isLoggedIn: false,
};

export const checkAuthSlice = createSlice({
  name: 'checkAuth',
  initialState,
  reducers: {},
  extraReducers: (builder) => extraReducers(builder),
});

export default checkAuthSlice.reducer;
