import {beRedditHook} from './base/redditHookFact';
import {redditBest} from '../api/reddit/readService';

async function onToken({token, setValue}) {
  if (!token) return;

  return redditBest(token).then((resp) => {
    setValue(resp?.data?.children);
  });
}

export default beRedditHook({onToken});
