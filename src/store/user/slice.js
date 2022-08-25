import { createSlice } from '@reduxjs/toolkit';
import extraReducers from './reducers';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => extraReducers(builder),
});

export default userSlice.reducer;
