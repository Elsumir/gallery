import {API_URL, ACCESS_KEY} from '../../api/const';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const authRequestAsync = createAsyncThunk('auth/fetch', (token, TK) => {
  // const token = TK.getState().token.token;
  console.log(token);

  if (!token) return;

  const API_URL_PHOTOS = `${API_URL}/me`;
  const url = new URL(API_URL_PHOTOS);
  url.searchParams.set('client_id', ACCESS_KEY);

  return axios(`${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({data}) => data.name)
    .catch((err) => {
      ({error: err});
    });
});
