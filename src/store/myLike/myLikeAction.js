import {API_URL} from '../../api/const';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const myLikeRequestAsync = createAsyncThunk('myLike/fetch', (_, TK) => {
  const token = TK.getState().token.token;
  const nikName = TK.getState().auth.name;

  if (!token || !nikName) return;

  const nik = nikName.nik;

  const url = `${API_URL}/users/${nik}/likes`;
  return axios(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({data}) =>
      data.map((e) => {
        const likeInfo = {
          id: e.id,
          myLike: e.liked_by_user,
          totalLike: e.likes,
        };
        return likeInfo;
      })
    )
    .catch((err) => {
      ({error: err});
    });
});
