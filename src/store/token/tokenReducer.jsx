import typeis from 'check-types';
import {SET, REMOVE} from './tokenTypes';
import {setStorageToken} from '../../utils/storageToken';

const tokenReducer = (state = '', {type, payload}) => {
  let result = state;
  let token = '';
  switch (type) {
    case SET:
      token = payload;
      if (typeis.nonEmptyString(token)) {
        setStorageToken(token);
        result = token;
      }
      break;
    case REMOVE:
      setStorageToken();
      result = '';
  }
  return result;
};

export default tokenReducer;
