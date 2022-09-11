import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../store';

export const usePosts = (
  () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state?.token);
    const posts = useSelector(state => state.posts);

    useEffect(() => {
      dispatch(actions.posts.request());
    }, [token]);

    return posts;
  }
);
