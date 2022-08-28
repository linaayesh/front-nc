/* eslint-disable no-param-reassign */ // -> Disabled as Redux toolkit uses Immer to mutate state|
// visit https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice for more details.

import {
  getContentById,
  getUsers,
  getPaginatedContent,
  matchUserContent,
} from './thunk';

const extraReducers = (builder) => {
  builder
    .addCase(getContentById.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getContentById.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload) state.curContent = action.payload;
    })
    .addCase(getContentById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  builder
    .addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.usersToMatch = action.payload;
    })
    .addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  builder
    .addCase(getPaginatedContent.fulfilled, (state, action) => {
      state.contents = { ...state.contents, [state.curPage]: action.payload.rows };
      state.contentsCount = action.payload.count;
      const titles = [];
      Object.values(state.contents)
        .forEach((rows) => rows.forEach((row) => titles.push({ value: row.title })));
      state.contentsTitles = titles;
      state.matchedContent = null;
    });

  builder
    .addCase(matchUserContent.fulfilled, (state, action) => {
      state.matchedContent = action.payload;
      state.contents = {};
      state.contentsTitles = [];
    });
};

export default extraReducers;
