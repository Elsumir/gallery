import {setToken, getCode} from '../../api/token';

import {
  API_URL_TOKEN,
  ACCESS_KEY,
  SECRET_KEY,
  REDIRECT_URI,
} from '../../api/const';
import axios from 'axios';

export const UPDATE_CODE = 'UPDATE_CODE';
export const DELETE_TOKEN = 'DELETE_TOKEN';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const TOKEN_REQUEST = 'TOKEN_REQUEST';
export const TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS';
export const TOKEN_REQUEST_ERROR = 'TOKEN_REQUEST_ERROR';

export const updateCode = (code) => ({
  type: UPDATE_CODE,
  code,
});
export const tokenRequest = (code) => ({
  type: TOKEN_REQUEST,
  code,
});
export const tokenRequestSuccess = (token) => ({
  type: TOKEN_REQUEST_SUCCESS,
  token,
});
export const tokenRequestError = (code) => ({
  type: TOKEN_REQUEST_ERROR,
  code,
});

export const deleteToken = () => ({
  type: DELETE_TOKEN,
  token: '',
});

export const tokenReduceAsync = () => (dispatch, getState) => {
  const code = getState().token.code;
  const token = getState().token.token;
  if (!code || token) return;
  const url = new URL(API_URL_TOKEN);
  url.searchParams.append('client_id', ACCESS_KEY);
  url.searchParams.append('client_secret', SECRET_KEY);
  url.searchParams.append('redirect_uri', REDIRECT_URI);
  url.searchParams.append('code', code);
  url.searchParams.append('grant_type', 'authorization_code');

  dispatch(tokenRequest());
  axios(url.href, {method: 'POST'})
    .then(({data}) => {
      setToken(data.access_token);
      dispatch(tokenRequestSuccess(data.access_token));
    })
    .catch((err) => {
      dispatch(tokenRequestError(err));
      console.err(err.message);
    });
};

export const tokenMiddleware = (store) => (next) => (action) => {
  if (action.type === UPDATE_CODE) {
    getCode(action.code);
  }
  if (action.type === DELETE_TOKEN) {
    setToken('');
  }
  next(action);
};
