import { createSlice } from '@reduxjs/toolkit';

export const manager = createSlice({
  name: 'manager',
  initialState: {
    currentComponent: 'search',
    isSearch: false,
  },
  reducers: {
    updateCurrentComponentAction: (state, action) => {
      state.currentComponent = action.payload;
    },
    updateIsSearchAction: (state, action) => {
      state.isSearch = action.payload;
    },
  },
});

export const { updateCurrentComponentAction, updateIsSearchAction } = manager.actions;

export const currentComponent = state => state.manager.currentComponent;
export const isSearch = state => state.manager.isSearch;

export default manager.reducer;
