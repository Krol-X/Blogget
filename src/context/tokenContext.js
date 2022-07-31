import beBaseContext from './base/baseContextFact';
import useToken from '../hooks/useToken';

const [tokenContext, TokenContextProvider] =
  beBaseContext(useToken, '');

export {tokenContext, TokenContextProvider};
