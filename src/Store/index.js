import { configureStore } from '@reduxjs/toolkit';

import checkAuthReducer from './Slices/checkAuthSlice';

const store = configureStore({
  reducer: {
    checkAuth: checkAuthReducer,
  },

});

export default store;
