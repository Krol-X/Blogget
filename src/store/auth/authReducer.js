import {AUTH_SET, AUTH_REMOVE} from './authActions';

const authReducer = (state = {}, {type, payload}) => {
  let result = state;
  switch (type) {
    case AUTH_SET:
      result = payload;
      break;
    case AUTH_REMOVE:
      result = {};
  }
  return result;
};

export default authReducer;
