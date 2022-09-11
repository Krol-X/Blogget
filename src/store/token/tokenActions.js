export const TOKEN_SET = 'TOKEN_SET';
export const TOKEN_REMOVE = 'TOKEN_REMOVE';

export const set = (token) => ({
  type: TOKEN_SET,
  payload: token
});

export const remove = () => ({
  type: TOKEN_REMOVE
});
