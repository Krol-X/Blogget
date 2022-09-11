export const POSTS_SET = 'POSTS_SET';
export const POSTS_REMOVE = 'POSTS_REMOVE';

export const set = (posts) => ({
  type: POSTS_SET,
  payload: posts
});

export const remove = () => ({
  type: POSTS_REMOVE
});
