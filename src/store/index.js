import {configureStore} from '@reduxjs/toolkit';
import {tokenReducer} from './token/tokenReducer';
import {tokenMiddleware} from './token/tokenAction';
import dataReducer from './photos/photosSlice';
import authSlice from './auth/authSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    data: dataReducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
