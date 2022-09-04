import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../store';
import {redditBest} from '../api/reddit/read';

export const usePosts = (
  () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state?.token);
    const posts = useSelector(state => state.posts);

    useEffect(() => {
      if (!token) return;

      redditBest(token).then((resp) => {
        dispatch(actions.posts.set(resp?.data?.children));
      });
    }, [token]);

    return posts;
  }
);
