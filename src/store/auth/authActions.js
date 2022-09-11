export const AUTH_SET = 'AUTH_SET';
export const AUTH_REMOVE = 'AUTH_REMOVE';

export const set = (auth) => ({
  type: AUTH_SET,
  payload: auth
});

export const remove = () => ({
  type: AUTH_REMOVE
});
