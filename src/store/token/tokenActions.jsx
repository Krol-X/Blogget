import tokenTypes from './tokenTypes';

export const set = (token) => ({
  type: tokenTypes.SET,
  token
});

export const remove = () => ({
  type: tokenTypes.REMOVE
});
