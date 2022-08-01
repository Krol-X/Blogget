import {reddit} from '../../config';

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
  const params = new URLSearchParams('');
  params.append('client_id', reddit.user.client_id);
  params.append('response_type', 'token');
  params.append('state', 'random_string');
  params.append('redirect_uri', reddit.url.redirect);
  params.append('scope', reddit.user.scope);
  return `${reddit.url.auth}${params.toString()}`;
};
