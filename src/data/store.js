import { configureStore } from '@reduxjs/toolkit';
import article from './article';
import user from './user';
import manager from './manager';

export const store = configureStore({
  reducer: {
    article: article,
    user: user,
    manager: manager,
  },
});
