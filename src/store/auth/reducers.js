import {
  loginUser, logoutUser, googleLogin, getUser,
} from './thunk';

const extraReducers = (builder) => {
  builder
    .addCase(getUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data;
      state.isLoggedIn = true;
    })
    .addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  builder
    .addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.payload;
      state.data = action.payload.message;
      state.isLoggedIn = true;
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  builder
    .addCase(logoutUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(logoutUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isLoggedIn = false;
    })
    .addCase(logoutUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  builder
    .addCase(googleLogin.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(googleLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.data = action.payload.message;
    })
    .addCase(googleLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
};

export default extraReducers;
