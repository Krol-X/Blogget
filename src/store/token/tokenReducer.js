import {TOKEN_SET, TOKEN_REMOVE} from './tokenActions';
import {getStorageToken} from '../../utils/storageToken';

const tokenReducer = (state = '', {type, payload}) => {
  switch (type) {
    case TOKEN_SET:
    case TOKEN_REMOVE:
      return getStorageToken() || '';
  }
  return state;
};

export default tokenReducer;
