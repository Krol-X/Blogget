import {SET, REMOVE} from './authTypes';

const authReducer = (state = {}, {type, payload}) => {
  let result = state;
  switch (type) {
    case SET:
      result = payload;
      break;
    case REMOVE:
      result = {};
  }
  return result;
};

export default authReducer;
