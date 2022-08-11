import { configureStore } from '@reduxjs/toolkit';

import checkAuthReducer from './auth/slice';
import adminReducer from './admin/slice';

const store = configureStore({
  reducer: {
    checkAuth: checkAuthReducer,
    admin: adminReducer,
  },

});

export default store;
