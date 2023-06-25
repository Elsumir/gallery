import {createSlice} from '@reduxjs/toolkit';
import {fullPageRequestAsync} from './fullPageAction';

const initialState = {
  error: '',
  myLike: '',
  loading: false,
};

export const fullPageSlice = createSlice({
  name: 'fullPage',
  initialState,
  reducers: {},
  extraReducers: {
    [fullPageRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [fullPageRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.page = action.payload;
      state.error = '';
    },
    [fullPageRequestAsync.rejected.type]: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export default fullPageSlice.reducer;
