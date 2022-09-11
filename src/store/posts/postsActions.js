import {checkToken} from '../token';
import {redditBest} from '../../api/reddit/read';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const POSTS_FAILURE = 'POSTS_FAILURE';
export const POSTS_SET = 'POSTS_SET';
export const POSTS_REMOVE = 'POSTS_REMOVE';

export const success = (posts) => ({
  type: POSTS_SUCCESS,
  payload: posts
});

export const failure = (error) => ({
  type: POSTS_FAILURE,
  err: error
});

export const set = (posts) => ({
  type: POSTS_SET,
  payload: posts
});

export const remove = () => ({
  type: POSTS_REMOVE
});

export const request = (postId) => (dispatch, getState) => {
  const token = getState().token;
  if (!checkToken(token)) return;

  redditBest(token).then((resp) => {
    dispatch(set(resp?.data?.children));
  });
};
