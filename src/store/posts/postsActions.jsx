import {SET, REMOVE} from './postsTypes';

export const set = (posts) => ({
  type: SET,
  payload: posts
});

export const remove = () => ({
  type: REMOVE
});
