import { configureStore } from '@reduxjs/toolkit';
import article from './article';
import user from './user';

export const store = configureStore({
  reducer: {
    article: article,
    user: user,
  },
});
