import {POSTS_SET, POSTS_REMOVE} from './postsActions';

const reducer = (state = [], {type, payload}) => {
  let result = state;
  switch (type) {
    case POSTS_SET:
      result = payload;
      break;
    case POSTS_REMOVE:
      result = [];
  }
  return result;
};

export default reducer;
