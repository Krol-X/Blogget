import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../store';
import {getTokenFromLocation} from '../api/reddit/auth';
import {replaceLocationTo} from '../utils/url';
import {getStorageToken} from '../utils/storageToken';

export const useToken = (
  () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.token);

    useEffect(() => {
      const newToken = getTokenFromLocation();
      if (newToken) {
        dispatch(actions.token.set(newToken));
        replaceLocationTo('/');
      } else {
        const storageToken = getStorageToken();
        dispatch(actions.token.set(storageToken));
      }
    }, []);

    return token;
  }
);
