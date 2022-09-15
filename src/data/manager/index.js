import { createSlice } from '@reduxjs/toolkit';

export const manager = createSlice({
  name: 'manager',
  initialState: {
    currentComponent: 'search',
    isSearch: false,
    validation: true,
  },
  reducers: {
    updateCurrentComponentAction: (state, action) => {
      state.currentComponent = action.payload;
    },
    updateIsSearchAction: (state, action) => {
      state.isSearch = action.payload;
    },
    updateValidationAction: (state, action) => {
      state.validation = action.payload;
    },
  },
});

export const { updateCurrentComponentAction, updateIsSearchAction, updateValidationAction } = manager.actions;

export const currentComponent = state => state.manager.currentComponent;
export const isSearch = state => state.manager.isSearch;
export const validation = state => state.manager.validation;

export default manager.reducer;
