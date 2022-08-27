import { createSlice } from '@reduxjs/toolkit';
import extraReducers from './reducers';

const initialState = {
  waitingList: [],
  approvedList: [],
  rejectedList: [],
  isLoading: false,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => extraReducers(builder),
});

export default adminSlice.reducer;
