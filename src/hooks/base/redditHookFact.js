import {useState, useEffect, useContext} from 'react';
import {isApiError, UNAUTHORIZED} from '../../error/apiError';
import {tokenContext} from '../../context/tokenContext';
import {authContext} from '../../context/authContext';

export const beRedditHook = ({noneValue, onInit, onToken, onError}) =>
  (defaultValue) => {
    const [value, setValue] = useState(defaultValue);
    const clearValue = () => setValue(noneValue || {});

    const [token, clearToken] = useContext(tokenContext);
    const clearAuth = useContext(authContext)[1];

    const initHandler = onInit || (async () => {});
    const tokenHandler = onToken || (async () => {});
    const errorHandler = onError || (({err}) => {
      console.error(err);
      if (isApiError(err, UNAUTHORIZED)) {
        clearToken();
        clearAuth();
      }
    });

    const privArgs = {value, setValue, clearValue, token, clearToken};
    useEffect(() => {
      initHandler(privArgs).catch(
        (err) => errorHandler({...privArgs, error: err})
      );
    }, []);
    useEffect(() => {
      tokenHandler(privArgs).catch(
        (err) => errorHandler({...privArgs, error: err})
      );
    }, [token]);

    return [value, clearValue];
  };
