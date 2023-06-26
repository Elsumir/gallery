import {API_URL} from '../../api/const';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
// import {useParams} from 'react-router-dom';

export const likeRequestAsync = createAsyncThunk('like/fetch', (id, TK) => {
  const token = TK.getState().token.token;
  const trueLike = TK.getState().fullPage.page;
  const like = TK.getState().like.like;

  let newLike;
  let trueMyLike;

  if (like) {
    newLike = like.like;
  }
  if (trueLike) {
    trueMyLike = trueLike.liked_by_user;
  }

  const count = () => {
    let result;
    if (!newLike) {
      result = trueMyLike;
    } else {
      result = newLike;
    }

    return result;
  };

  const booleanLike = count();

  console.log('bool', booleanLike);

  const url = new URL(`${API_URL}/photos/${id}/like`);

  return axios(`${url}`, {
    method: booleanLike ? 'DELETE' : 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({data}) => {
      console.log(booleanLike);
      const photoInfo = {
        like: data.photo.liked_by_user,
        countLike: data.photo.likes,
        bool: booleanLike,
      };
      return photoInfo;
    })
    .catch((err) => {
      ({error: err});
    });
});
