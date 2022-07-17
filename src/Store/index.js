import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';

import checkAuthReducer from './Slices/checkAuthSlice';

const store = configureStore({
  reducer: {
    checkAuth: checkAuthReducer,
  },
  middleware: [],
});
// setupListeners(store.dispatch);

export default store;
