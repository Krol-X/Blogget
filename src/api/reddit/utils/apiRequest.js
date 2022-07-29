import {reddit} from '../../config';

export const beApiRequest = (path) =>
  (token) =>
    fetch(`${reddit.url.api}${path}`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(`API: ${path}`, data);
        return data;
      })
      .catch(err =>
        console.error(err)
      );
