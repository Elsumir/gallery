import {configureStore} from '@reduxjs/toolkit';
import {tokenReducer} from './token/tokenReducer';
import {tokenMiddleware} from './token/tokenAction';
import dataReducer from './photos/photosSlice';
import authSlice from './auth/authSlice';
import likeSlice from './like/likeSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    data: dataReducer,
    auth: authSlice,
    like: likeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
