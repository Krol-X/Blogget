import {createContext} from 'react';
import useAuth from '../hooks/useAuth';

export const authContext = createContext({});

export const authContextProvider = ({children}) => {
  const {auth, clearAuth} = useAuth({});
  const {Provider} = authContext;

  return (
    <Provider value={{auth, clearAuth}}>
      {children}
    </Provider>
  );
};
