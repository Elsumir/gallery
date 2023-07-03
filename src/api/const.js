export const API_URL = 'https://api.unsplash.com';
export const API_URL_AUTH = 'https://unsplash.com/oauth/authorize?';
export const API_URL_TOKEN = 'https://unsplash.com/oauth/token?';
export const ACCESS_KEY = 'OIxYOW_e_Y0lmqJbKePK3GLB-n-u_gfhKk4APEfOt5Q';
export const REDIRECT_URI = 'http://192.168.1.6:3000/auth';
export const RESPONSE_TYPE = 'code';
export const SCOPE = 'public read_user read_photos write_likes';
export const SECRET_KEY = 'n3eSY4m4BIYvFtj7iMZjg-tX2PQmnFRdjoFEs3CXN_Y';
export const CODE = location.href.replace(
  'http://192.168.1.6:3000/auth?code=',
  ''
);
export const GRANT_TYPE = 'authorization_code';
