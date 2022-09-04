import {urlConfig, userConfig} from '../../../config';
import {createUrl} from '../../../utils/url';
import {unauthorizedError} from '../../../error/apiError';

const completeTail = (tail) => (!tail ? '' : `/${tail}`);

export const beApiRequest = (path) =>
  (token, args, tail) =>
    fetch(createUrl(`${urlConfig.api}${path}${completeTail(tail)}`, args), {
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
        if (userConfig.verbose) {
          console.log(`API: ${path}`, data);
        }
        return data;
      });
