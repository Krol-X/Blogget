import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../store';
import {redditMe} from '../api/reddit/identity';

export const useAuth = (
  () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.token);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
      if (!token) return;

      redditMe(token).then(({name, icon_img: userIcon}) => {
        const icon = userIcon.replace(/\?.*$/, '');
        dispatch(actions.auth.set({name, icon}));
      });
    }, [token]);

    return auth;
  }
);
