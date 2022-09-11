import {
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_SET,
  AUTH_REMOVE
} from './authActions';

const authReducer = (state = {}, {type, payload, err}) => {
  let result = state;
  switch (type) {
    case AUTH_SUCCESS:
    case AUTH_SET:
      result = {data: payload};
      break;
    case AUTH_FAILURE:
      result = {data: null, err};
      break;
    case AUTH_REMOVE:
      result = {};
  }
  return result;
};

export default authReducer;
