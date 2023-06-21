import {createSlice} from '@reduxjs/toolkit';
import {likeRequestAsync} from './likeAction';

const initialState = {
  error: '',
  like: '',
  loading: false,
};

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {},
  extraReducers: {
    [likeRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [likeRequestAsync.fulfilled.type]: (state, action) => {
      console.log(state);
      console.log(action);
      state.loading = false;
      state.like = action.payload;
      state.error = '';
    },
    [likeRequestAsync.rejected.type]: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export default likeSlice.reducer;
