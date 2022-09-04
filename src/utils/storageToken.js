import {userConfig} from '../config';
const {showToken} = userConfig;
import typeis from 'check-types';

export const getStorageToken = () => {
  const token = localStorage.getItem('bearer');
  if (typeis.nonEmptyString(token)) {
    if (showToken) {
      console.log('USE LOCAL TOKEN:', token);
    }
    return token;
  }
};

export const setStorageToken = (newToken) => {
  if (typeis.nonEmptyString(newToken)) {
    localStorage.setItem('bearer', newToken);
    if (showToken) {
      console.log('NEW TOKEN:', newToken);
    }
  } else {
    localStorage.removeItem('bearer');
    if (showToken) {
      console.log('TOKEN REMOVED');
    }
  }
};
