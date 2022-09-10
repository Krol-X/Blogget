import {SET, REMOVE} from './authTypes';

export const set = (auth) => ({
  type: SET,
  payload: auth
});

export const remove = () => ({
  type: REMOVE
});

