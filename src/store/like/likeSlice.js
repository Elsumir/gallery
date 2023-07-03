import {createSlice} from '@reduxjs/toolkit';
import {likeRequestAsync} from './likeAction';

const initialState = {
  error: '',
  like: '',
  loading: false,
  status: '',
};

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    clearLike: (state, action) => {
      state.loading = false;
      state.like = 'undefined';
      state.error = '';
    },
  },
  extraReducers: {
    [likeRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [likeRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.like = action.payload;
      state.status = !action.payload ? alert('Что-то пошло не так') : '';
      state.error = '';
    },
    [likeRequestAsync.rejected.type]: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export default likeSlice.reducer;
