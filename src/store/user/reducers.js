/* eslint-disable no-param-reassign */ // -> Disabled as Redux toolkit uses Immer to mutate state|
// visit https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice for more details.

import {
  createUser,
  updateUser,
  forgetPassword,
  resetPassword,
  getFinancialData,
  createFinancialData,
  updateFinancialData,
} from './thunk';

const extraReducers = (builder) => {
  builder
    .addCase(createUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  builder
    .addCase(updateUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  builder
    .addCase(forgetPassword.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(forgetPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(forgetPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  builder
    .addCase(resetPassword.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(resetPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(resetPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  builder
    .addCase(getFinancialData.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getFinancialData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(getFinancialData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  builder
    .addCase(createFinancialData.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createFinancialData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(createFinancialData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  builder
    .addCase(updateFinancialData.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(updateFinancialData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(updateFinancialData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
};

export default extraReducers;
