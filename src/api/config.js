import {myreddit} from './myconfig';
const env = process.env;

export const reddit = {
  url: {
    auth: 'https://www.reddit.com/api/v1/authorize?',
    api: 'https://oauth.reddit.com/api/v1',
    redirect: 'http://localhost:3000/auth'
  },
  user: {
    client_id: env.CLIENT_ID || myreddit.client_id,
    scope: myreddit.scope || 'identity read submit'
  }
};
