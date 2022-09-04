import postsTypes from './postsTypes';

export const set = (posts) => ({
  type: postsTypes.SET,
  posts
});

export const remove = () => ({
  type: postsTypes.REMOVE
});
