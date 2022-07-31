import {useState, useEffect, useContext} from 'react';
import {tokenContext} from '../../context/tokenContext';
import {authContext} from '../../context/authContext';
import {isApiError, UNAUTHORIZED} from '../../error/apiError';

export const beRedditHook = ({noneValue, onInit, onToken, onError}) =>
  (defaultValue) => {
    const [value, setValue] = useState(defaultValue);
    const clearValue = () => setValue(noneValue || {});

    const [token, clearToken] = useContext(tokenContext);
    const clearAuth = useContext(authContext)[1];

    const initHandler = onInit || (async () => {});
    const tokenHandler = onToken || (async () => {});
    const errorHandler = onError || ((err) => {
      console.error(err);
      if (isApiError(err, UNAUTHORIZED)) {
        clearToken();
        clearAuth();
      }
    });

    const privArgs = {value, setValue, clearValue, token};
    useEffect(() => {
      initHandler(privArgs).catch(errorHandler);
    }, []);
    useEffect(() => {
      tokenHandler(privArgs).catch(errorHandler);
    }, [token]);

    return [value, clearValue];
  };
