import {
  API_URL_TOKEN,
  ACCESS_KEY,
  SECRET_KEY,
  REDIRECT_URI,
  CODE,
  GRANT_TYPE,
} from './const.js';

export const searchParams = new URLSearchParams('');

searchParams.append('client_id', ACCESS_KEY);
searchParams.append('client_secret', SECRET_KEY);
searchParams.append('redirect_uri', REDIRECT_URI);
searchParams.append('code', CODE);
searchParams.append('grant_type', GRANT_TYPE);

export const urlToken = `${API_URL_TOKEN}${searchParams.toString()}`;
