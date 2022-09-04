import typeis from 'check-types';
import tokenTypes from './tokenTypes';
const {SET, REMOVE} = tokenTypes;
import {setStorageToken} from '../../utils/storageToken';

const setToken = (state, action) => {
  const token = action.token;
  if (!typeis.nonEmptyString(token)) {
    return state;
  }
  setStorageToken(token);
  return {
    ...state,
    token
  };
};

const removeToken = (state, action) => {
  if (state.token) {
    delete state.token;
  }
  setStorageToken();
  return state;
};

export default {
  [SET]: setToken,
  [REMOVE]: removeToken
};
