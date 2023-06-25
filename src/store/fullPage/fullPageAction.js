import {API_URL} from '../../api/const';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const fullPageRequestAsync = createAsyncThunk(
  'fullPage/fetch',
  (id, TK) => {
    const token = TK.getState().token.token;

    const url = `${API_URL}/photos/${id}`;
    return axios(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(({data}) => data)

      .catch((err) => {
        ({error: err});
      });
  }
);
