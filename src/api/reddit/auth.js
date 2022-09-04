import {reddit} from '../../config';
import {createUrl, getLocationParams} from '../../utils/url';

export const getTokenFromLocation = () => {
  let newToken = '';
  if (location.pathname.includes('/auth')) {
    const params = getLocationParams();
    newToken = params.get('access_token');
  }
  return newToken;
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
