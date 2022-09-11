import typeis from 'check-types';
import {
  TOKEN_SUCCESS,
  TOKEN_GET_FAILURE,
  TOKEN_SET,
  TOKEN_REMOVE
} from './tokenActions';
import {
  getStorageToken,
  setStorageToken
} from '../../utils/storageToken';

const trySetToken = (token) => {
  if (typeis.nonEmptyString(token)) {
    setStorageToken(token);
  }
};

export const tokenMiddleware = store => next => action => {
  let storageToken = '';
  switch (action.type) {
    case TOKEN_SUCCESS:
    case TOKEN_SET:
      trySetToken(action.payload);
      break;
    case TOKEN_GET_FAILURE:
      storageToken = getStorageToken();
      trySetToken(storageToken);
      break;
    case TOKEN_REMOVE:
      setStorageToken();
  }
  next(action);
};
