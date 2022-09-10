import {SET, REMOVE} from './postTypes';

export const set = (post, comments) => ({
  type: SET,
  payload: {post, comments}
});

export const remove = () => ({
  type: REMOVE
});
