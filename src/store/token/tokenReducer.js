import {
  TOKEN_SUCCESS,
  TOKEN_GET_FAILURE,
  TOKEN_SET,
  TOKEN_REMOVE
} from './tokenActions';
import {getStorageToken} from '../../utils/storageToken';

const tokenReducer = (state = '', {type, payload}) => {
  switch (type) {
    case TOKEN_SUCCESS:
    case TOKEN_GET_FAILURE:
    case TOKEN_SET:
    case TOKEN_REMOVE:
      return getStorageToken() || '';
  }
  return state;
};

export default tokenReducer;
