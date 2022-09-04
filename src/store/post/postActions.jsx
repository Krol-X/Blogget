import postTypes from './postTypes';

export const set = (post, comments) => ({
  type: postTypes.SET,
  post, comments
});
