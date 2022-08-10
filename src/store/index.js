import { configureStore } from '@reduxjs/toolkit';

import checkAuthReducer from './slices/checkAuthSlice';
import adminReducer from './slices/adminSlice';

const store = configureStore({
  reducer: {
    checkAuth: checkAuthReducer,
    admin: adminReducer,
  },

});

export default store;
