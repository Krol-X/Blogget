import postsTypes from './postsTypes';

export const set = (posts) => ({
  type: postsTypes.SET,
  posts
});
