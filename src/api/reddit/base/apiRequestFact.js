import {reddit} from '../../../config';
import {unauthorizedError} from '../../../error/apiError';

export const beApiRequest = (path) =>
  (token) =>
    fetch(`${reddit.url.api}${path}`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
      .then(resp => {
        if (resp.status === 401) {
          throw unauthorizedError('Пользователь не авторизован');
        }
        return resp.json();
      })
      .then(data => {
        console.log(`API: ${path}`, data);
        return data;
      });
