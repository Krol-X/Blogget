import {beRedditHook} from './base/redditHookFact';
import {redditMe} from '../api/reddit/identityService';
import {isApiError, UNAUTHORIZED} from '../error/apiError';

async function onToken({token, setValue}) {
  if (!token) return;

  return redditMe(token).then(({name, icon_img: iconImg}) => {
    const img = iconImg.replace(/\?.*$/, '');
    setValue({name, img});
  });
}

async function onError({error, clearValue, clearToken}) {
  console.error(error);
  if (isApiError(error, UNAUTHORIZED)) {
    clearToken();
    clearValue();
  }
}

export default beRedditHook({onToken, onError});
