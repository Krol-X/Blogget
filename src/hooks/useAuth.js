import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../store';

export const useAuth = (
  () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.token);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
      dispatch(actions.auth.request());
    }, [token]);

    return auth;
  }
);
