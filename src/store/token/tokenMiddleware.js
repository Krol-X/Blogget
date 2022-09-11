import typeis from 'check-types';
import {TOKEN_SET, TOKEN_REMOVE} from './tokenActions';
import {setStorageToken} from '../../utils/storageToken';

export const tokenMiddleware = store => next => action => {
  let token = '';
  switch (action.type) {
    case TOKEN_SET:
      token = action.payload;
      if (typeis.nonEmptyString(token)) {
        setStorageToken(token);
      }
      break;
    case TOKEN_REMOVE:
      setStorageToken();
  }
  next(action);
};
