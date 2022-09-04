import myconfig from './myconfig';
const env = process.env;

const urlConfig = {
  auth: 'https://www.reddit.com/api/v1/authorize',
  api: 'https://oauth.reddit.com',
  redirect: 'http://localhost:3000/auth'
};
const userConfig = {
  verbose: env.VERBOSE ?? myconfig.verbose ?? false,
  client_id: env.CLIENT_ID ?? myconfig.reddit_client_id,
  scope: myconfig.reddit_scope ?? 'identity read submit',
  showToken: myconfig.showToken ?? false,
  useStrictMode: myconfig.useStrictMode ?? false,
  useTestApi: myconfig.useTestApi ?? true
};

export {urlConfig, userConfig};
