import {createContext} from 'react';
import useToken from '../hooks/useToken';

export const tokenContext = createContext({});

export const tokenContextProvider = ({children}) => {
  const {token, clearToken} = useToken('');
  const {Provider} = tokenContext;

  return (
    <Provider value={{token, clearToken}}>
      {children}
    </Provider>
  );
};
