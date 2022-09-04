import postsTypes from './postsTypes';
const {SET} = postsTypes;

const set = (state, action) => {
  const result = {
    ...state,
    posts: action.posts
  };
  return result;
};

const reducer = {
  [SET]: set
};

export default reducer;
