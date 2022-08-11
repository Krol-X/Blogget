import {isNativeObject} from './misc';

export const createUrl = (url, params) => {
  if (!isNativeObject(params)) {
    return url;
  }
  let tail = new URLSearchParams('');
  for (const key in params) {
    if ({}.hasOwnProperty.call(params, key)) {
      tail.append(key, params[key]);
    }
  }
  if (tail.toString() !== '') {
    tail = `?${tail.toString()}`;
  } else {
    tail = '';
  }
  return `${url}${tail}`;
};
