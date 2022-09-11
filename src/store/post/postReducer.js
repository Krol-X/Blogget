import {
  POST_SUCCESS,
  POST_FAILURE,
  POST_SET,
  POST_REMOVE
} from './postActions';

const reducer = (state = {}, {type, payload, err}) => {
  let result = state;
  switch (type) {
    case POST_SUCCESS:
    case POST_SET:
      result = {
        data: payload.post,
        comments: payload.comments
      };
      break;
    case POST_FAILURE:
      result = {
        data: null, comments: null,
        err
      };
      break;
    case POST_REMOVE:
      result = {};
  }
  return result;
};

export default reducer;
