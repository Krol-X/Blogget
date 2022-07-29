import {createContext} from 'react';
import PropTypes from 'prop-types';
import useToken from '../hooks/useToken';

export const tokenContext = createContext({});

export const TokenContextProvider = ({children}) => {
  const [token, clearToken] = useToken('');
  const {Provider} = tokenContext;

  return (
    <Provider value={{token, clearToken}}>
      {children}
    </Provider>
  );
};

TokenContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

