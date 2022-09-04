import authTypes from './authTypes';

export const set = (auth) => ({
  type: authTypes.SET,
  auth
});
