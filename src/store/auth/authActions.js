import {checkToken} from '../token';
import {redditMe} from '../../api/reddit/identity';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const AUTH_SET = 'AUTH_SET';
export const AUTH_REMOVE = 'AUTH_REMOVE';

export const success = (auth) => ({
  type: AUTH_SUCCESS,
  payload: auth
});

export const failure = (error) => ({
  type: AUTH_FAILURE,
  err: error
});

export const set = (auth) => ({
  type: AUTH_SET,
  payload: auth
});

export const remove = () => ({
  type: AUTH_REMOVE
});

export const request = () => (dispatch, getState) => {
  const token = getState().token;
  if (!checkToken(token)) return;

  redditMe(token).then(({name, icon_img: userIcon}) => {
    const icon = userIcon.replace(/\?.*$/, '');
    dispatch(success({name, icon}));
  });
};
