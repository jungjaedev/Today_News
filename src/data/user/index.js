import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
  name: 'user',
  initialState: {
    isLogin: false,
  },
  reducers: {
    updateIsLoginAction: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { updateIsLoginAction } = user.actions;

export const isLogin = state => state.user.isLogin;

export default user.reducer;
