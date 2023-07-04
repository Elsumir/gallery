import {API_URL, ACCESS_KEY} from '../../api/const';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const authRequestAsync = createAsyncThunk('auth/fetch', (_, TK) => {
  const token = TK.getState().token.token;

  if (!token) return;

  const API_URL_PHOTOS = `${API_URL}/me`;
  const url = new URL(API_URL_PHOTOS);
  url.searchParams.set('client_id', ACCESS_KEY);

  return axios(`${url}11`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({data}) => {
      const nik = data.username;
      const name = data.name;
      const user = {name, nik};
      return user;
    })
    .catch((err) => {
      ({error: err});
    });
});
