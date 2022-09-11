import {checkToken} from './index';
import {getTokenFromLocation} from '../../api/reddit/auth';
import {replaceLocationTo} from '../../utils/url';

export const TOKEN_REQUEST = 'TOKEN_REQUEST';
export const TOKEN_SUCCESS = 'TOKEN_SUCCESS';
export const TOKEN_GET_FAILURE = 'TOKEN_GET_FAILURE';
export const TOKEN_SET = 'TOKEN_SET';
export const TOKEN_REMOVE = 'TOKEN_REMOVE';

export const success = (token) => ({
  type: TOKEN_SUCCESS,
  payload: token
});

export const getFailure = () => ({
  type: TOKEN_GET_FAILURE
});

export const set = (token) => ({
  type: TOKEN_SET,
  payload: token
});

export const remove = () => ({
  type: TOKEN_REMOVE
});


export const request = () => (dispatch, getState) => {
  const newToken = getTokenFromLocation();
  const oldToken = getState().token;
  if (newToken !== oldToken) {
    if (checkToken(newToken)) {
      replaceLocationTo('/');
      dispatch(success(newToken));
    } else {
      dispatch(getFailure());
    }
  }
};
