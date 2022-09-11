import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../store';

export const useToken = (
  () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.token);

    useEffect(() => {
      dispatch(actions.token.request());
    }, []);

    return token;
  }
);
