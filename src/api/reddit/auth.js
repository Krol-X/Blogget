import {urlConfig, userConfig} from '../../config';
import {createUrl, getLocationParams} from '../../utils/url';

export const getTokenFromLocation = () => {
  let newToken = '';
  if (location.pathname.includes('/auth')) {
    const params = getLocationParams();
    newToken = params.get('access_token');
  }
  return newToken;
};

export const getUrlAuth = () => (
  createUrl(urlConfig.auth, {
    'client_id': userConfig.client_id,
    'response_type': 'token',
    'state': 'random_string',
    'redirect_uri': urlConfig.redirect,
    'scope': userConfig.scope,
  })
);
