import {createSlice} from '@reduxjs/toolkit';
import {authRequestAsync} from './authAction';

const initialState = {
  name: '',
  loading: false,
  login: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [authRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [authRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.name = action.payload;
      state.error = '';
    },
    [authRequestAsync.rejected.type]: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
