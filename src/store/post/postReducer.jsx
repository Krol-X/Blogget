import postTypes from './postTypes';
const {SET} = postTypes;

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

const reducer = {
  [SET]: set
};

export default reducer;
