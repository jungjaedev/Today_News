import { createSlice } from '@reduxjs/toolkit';

export const article = createSlice({
  name: 'article',
  initialState: {
    // isWriting: false,
  },
  reducers: {
    // updateModalAction: (state, action) => {
    //   state.isWriting = action.payload;
    // },
  },
});

// export const { updateModalAction } = article.actions;

// export const isWriting = state => state.article.isWriting;

export default article.reducer;
