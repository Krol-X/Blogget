import {reddit} from '../../config';

export const beApiRequest = (path) => {
  return (token) => {
    let result = {};

    fetch(`${reddit.url.api}${path}`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        result = data;
      });

    return result;
  };
};
