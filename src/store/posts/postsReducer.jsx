import {SET, REMOVE} from './postsTypes';

const reducer = (state = [], {type, payload}) => {
  let result = state;
  switch (type) {
    case SET:
      result = payload;
      break;
    case REMOVE:
      result = [];
  }
  return result;
};

export default reducer;
