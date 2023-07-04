/* eslint-disable indent */
/* eslint-disable operator-linebreak */
import {API_URL, ACCESS_KEY} from '../../api/const';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const dataRequestAsync = createAsyncThunk(
  'data/fetch',
  (page = 1, TK) => {
    const token = TK.getState().token.token;

    const API_URL_PHOTOS = `${API_URL}/photos?page=${page}&per_page=30`;
    const url = new URL(API_URL_PHOTOS);
    url.searchParams.set('client_id', ACCESS_KEY);

    try {
      return axios(`${url}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }).then(({data, status}) => {
        console.log();
        return status === 404
          ? status
          : data.map((e) => {
              const card = {
                id: e.id,
                date: e.created_at,
                address: e.user.links.html,
                likes: e.likes,
                thumbnail: e.urls.regular,
                fullImg: e.urls.full,
                myLike: e.liked_by_user,
                userName: e.user.name,
              };
              return card;
            });
      });
    } catch (err) {
      console.log(err);
      return err.message;
    }
  }
);
