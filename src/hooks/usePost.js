import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../store';

export const usePost = (
  (postId) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state?.token);
    const post = useSelector(state => state?.post?.data);
    const comments = useSelector(state => state?.post?.comments);

    useEffect(() => {
      dispatch(actions.post.request(postId));
      return () => dispatch(actions.post.remove());
    }, [token]);

    return {post, comments};
  }
);
