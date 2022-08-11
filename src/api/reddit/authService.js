import {reddit} from '../../config';
import {createUrl} from '../../utils/url';

export const getTokenFromLocation = () => {
  let token = '';
  if (location.pathname.includes('/auth')) {
    const locHash = location.hash.substring(1);
    token = new URLSearchParams(locHash)
      .get('access_token');
  }
  return token;
};

export const getUrlAuth = () => {
  const {url, user} = reddit;

  return createUrl(url.auth, {
    'client_id': user.client_id,
    'response_type': 'token',
    'state': 'random_string',
    'redirect_uri': url.redirect,
    'scope': user.scope,
  });
};
