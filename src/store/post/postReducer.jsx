import postTypes from './postTypes';
const {SET, REMOVE} = postTypes;

const set = (state, action) => {
  const result = {
    ...state,
    post: {
      data: action.post,
      comments: action.comments
    }
  };
  return result;
};

const remove = (state, action) => {
  delete state.post;
  return state;
};

const reducer = {
  [SET]: set,
  [REMOVE]: remove
};

export default reducer;
