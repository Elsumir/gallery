import {configureStore} from '@reduxjs/toolkit';
import {tokenReducer} from './token/tokenReducer';
import {tokenMiddleware} from './token/tokenAction';
import dataReducer from './photos/photosSlice';
import authSlice from './auth/authSlice';
import likeSlice from './like/likeSlice';
import myLikeSlice from './myLike/myLikeSlice';
import fullPageSlice from './fullPage/fullPageSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    data: dataReducer,
    auth: authSlice,
    like: likeSlice,
    myLike: myLikeSlice,
    fullPage: fullPageSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
