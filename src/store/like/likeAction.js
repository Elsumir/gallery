import {API_URL} from '../../api/const';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
// import {useParams} from 'react-router-dom';

export const likeRequestAsync = createAsyncThunk('like/fetch', (id, TK) => {
  const token = TK.getState().token.token;
  const likes = TK.getState().fullPage.page;

  let booleanLike;

  if (likes) {
    booleanLike = likes.liked_by_user;
  }

  const url = new URL(`${API_URL}/photos/${id}/like`);

  return axios(`${url}`, {
    method: booleanLike ? 'DELETE' : 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({data}) => {
      console.log(data);
      const photoInfo = {
        like: data.photo.liked_by_user,
        countLike: data.photo.likes,
      };
      return photoInfo;
    })
    .catch((err) => {
      ({error: err});
    });
});
