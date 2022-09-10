import {SET, REMOVE} from './postTypes';

const reducer = (state = {}, {type, payload}) => {
  let result = state;
  switch (type) {
    case SET:
      result = {
        data: payload.post,
        comments: payload.comments
      };
      break;
    case REMOVE:
      result = {};
  }
  return result;
};

export default reducer;
