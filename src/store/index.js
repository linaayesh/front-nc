import { configureStore } from '@reduxjs/toolkit';

import checkAuthReducer from './auth/slice';
import adminReducer from './admin/slice';
import userReducer from './user/slice';
import matchContentsReducer from './matchContent/slice';

const store = configureStore({
  reducer: {
    checkAuth: checkAuthReducer,
    admin: adminReducer,
    user: userReducer,
    matchContents: matchContentsReducer,
  },
});

export default store;
