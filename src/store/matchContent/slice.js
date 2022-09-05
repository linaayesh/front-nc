import { createSlice } from '@reduxjs/toolkit';
import extraReducers from './reducers';

const initialState = {
  curPage: 1,
  contentsCount: 0,
  contents: {},
  curContent: null,
  matchedContent: null,
  usersToMatch: [],
  contentsTitles: [],
  isLoading: true,
  error: null,
  searchResults: [],
  visible: false,
};

export const matchContentsSlice = createSlice({
  name: 'matchContents',
  initialState,
  reducers: {
    setCurPage: (state, action) => {
      state.curPage = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setVisible: (state, action) => {
      state.visible = action.payload;
    },
  },
  extraReducers: (builder) => extraReducers(builder),
});

export const { setCurPage, setSearchResults, setVisible } = matchContentsSlice.actions;
export default matchContentsSlice.reducer;
