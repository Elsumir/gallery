import {createSlice} from '@reduxjs/toolkit';
import {myLikeRequestAsync} from './myLikeAction';

const initialState = {
  error: '',
  myLike: '',
  loading: false,
};

export const myLikeSlice = createSlice({
  name: 'myLike',
  initialState,
  reducers: {},
  extraReducers: {
    [myLikeRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [myLikeRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.myLike = action.payload;
      state.error = '';
    },
    [myLikeRequestAsync.rejected.type]: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export default myLikeSlice.reducer;
