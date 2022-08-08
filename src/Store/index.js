import { configureStore } from '@reduxjs/toolkit';

import checkAuthReducer from './Slices/checkAuthSlice';
import adminReducer from './Slices/adminSlice';

const store = configureStore({
  reducer: {
    checkAuth: checkAuthReducer,
    admin: adminReducer,
  },

});

export default store;
