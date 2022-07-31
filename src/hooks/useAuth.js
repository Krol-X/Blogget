import {beRedditHook} from './base/redditHookFact';
import {redditMe} from '../api/reddit/identityService';

async function onToken({token, setValue}) {
  if (!token) return;

  redditMe(token).then(({name, icon_img: iconImg}) => {
    const img = iconImg.replace(/\?.*$/, '');
    setValue({name, img});
  });
}

export default beRedditHook({onToken});
