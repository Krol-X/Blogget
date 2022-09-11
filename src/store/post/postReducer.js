import {POST_SET, POST_REMOVE} from './postActions';

const reducer = (state = {}, {type, payload}) => {
  let result = state;
  switch (type) {
    case POST_SET:
      result = {
        data: payload.post,
        comments: payload.comments
      };
      break;
    case POST_REMOVE:
      result = {};
  }
  return result;
};

export default reducer;
