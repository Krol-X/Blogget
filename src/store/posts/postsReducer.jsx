import postsTypes from './postsTypes';
const {SET, REMOVE} = postsTypes;

const set = (state, action) => {
  const result = {
    ...state,
    posts: action.posts
  };
  return result;
};

const remove = (state, action) => {
  delete state.posts;
  return state;
};

const reducer = {
  [SET]: set,
  [REMOVE]: remove
};

export default reducer;
