import {createSlice} from '@reduxjs/toolkit';
import {dataRequestAsync} from './photosActions';

const initialState = {
  data: [],
  error: '',
  after: '',
  page: '',
  isLast: false,
  loading: false,
  status: '',
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: {
    [dataRequestAsync.pending.type]: (state, action) => {
      state.loading = true;
      state.error = '';
    },
    [dataRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data =
        action.payload === undefined ? [] : [...state.data, ...action.payload];
      state.error = '';
      state.status = action.payload === undefined ? true : '';
    },
    [dataRequestAsync.rejected.type]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export default dataSlice.reducer;
