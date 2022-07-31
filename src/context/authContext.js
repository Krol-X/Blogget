import beBaseContext from './base/baseContextFact';
import useAuth from '../hooks/useAuth';

const [authContext, AuthContextProvider] =
  beBaseContext(useAuth, {});

export {authContext, AuthContextProvider};
