import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
  name: 'user',
  initialState: {
    // isWriting: false,
  },
  reducers: {
    // updateModalAction: (state, action) => {
    //   state.isWriting = action.payload;
    // },
  },
});

// export const { updateModalAction } = user.actions;

// export const isWriting = state => state.user.isWriting;

export default user.reducer;
