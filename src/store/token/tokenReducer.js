import {getCode, getToken} from '../../api/token';

const initialState = {
  code: getCode(),
  loading: false,
  token: getToken(),
  cullFunc: true,
};

const DELETE_TOKEN = 'DELETE_TOKEN';
const UPDATE_CODE = 'DELETE_TOKEN';
const TOKEN_REQUEST = 'TOKEN_REQUEST';
const TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS';
const TOKEN_REQUEST_ERROR = 'TOKEN_REQUEST_ERROR';

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TOKEN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.token,
        cullFunc: false,
      };
    case TOKEN_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case UPDATE_CODE:
      return {
        ...state,
        code: action.code,
      };
    case DELETE_TOKEN:
      return {
        ...state,
        token: '',
      };

    default:
      return state;
  }
};
