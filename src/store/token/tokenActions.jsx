import {SET, REMOVE} from './tokenTypes';

export const set = (token) => ({
  type: SET,
  payload: token
});

export const remove = () => ({
  type: REMOVE
});
