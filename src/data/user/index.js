import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
  name: 'user',
  initialState: {
    isLogin: false,
    loginInfo: {
      account: '',
      password: '',
    },
  },
  reducers: {
    updateIsLoginAction: (state, action) => {
      state.isLogin = action.payload;
    },
    updateloginInfoAction: (state, action) => {
      state.loginInfo = action.payload;
    },
  },
});

export const { updateIsLoginAction, updateloginInfoAction } = user.actions;

export const isLogin = state => state.user.isLogin;
export const loginInfo = state => state.user.loginInfo;

export default user.reducer;
