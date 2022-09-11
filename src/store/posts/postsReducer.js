import {
  POSTS_SUCCESS,
  POSTS_FAILURE,
  POSTS_SET,
  POSTS_REMOVE
} from './postsActions';

const reducer = (state = {}, {type, payload, err}) => {
  let result = state;
  switch (type) {
    case POSTS_SUCCESS:
    case POSTS_SET:
      result = {data: payload};
      break;
    case POSTS_FAILURE:
      result = {data: null, err};
      break;
    case POSTS_REMOVE:
      result = {};
  }
  return result;
};

export default reducer;
