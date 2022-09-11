import {
  TOKEN_SUCCESS,
  TOKEN_GET_FAILURE,
  TOKEN_SET,
  TOKEN_REMOVE
} from './tokenActions';
import {getStorageToken} from '../../utils/storageToken';

const tokenReducer = (state = '', {type, payload}) => {
  let result = state;
  switch (type) {
    case TOKEN_SUCCESS:
    case TOKEN_GET_FAILURE:
    case TOKEN_SET:
    case TOKEN_REMOVE:
      result = getStorageToken() || '';
  }
  return result;
};

export default tokenReducer;
