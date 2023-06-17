import {createSlice} from '@reduxjs/toolkit';
import {dataRequestAsync} from './photosActions';

const initialState = {
  data: [],
  error: '',
  after: '',
  page: '',
  isLast: false,
  loading: false,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: {
    [dataRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [dataRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = [...state.data, ...action.payload];
      state.after = action.payload.after;
      state.error = '';
      state.isLast = !action.payload.after;
    },
    [dataRequestAsync.rejected.type]: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export default dataSlice.reducer;
