import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../store';
import {redditComments} from '../api/reddit/read';
import {Parser} from '../api/reddit/Parser';

export const usePost = (
  (postId) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state?.token);
    const post = useSelector(state => state?.post?.data);
    const comments = useSelector(state => state?.post?.comments);

    useEffect(() => {
      if (!token) return;

      redditComments(token, {}, postId).then(rawData => {
        const p = new Parser(rawData);
        const newPost = p.get();
        const newComments = p.get_comments_all();
        dispatch(actions.post.set(newPost, newComments));
      });

      return () => {
        dispatch(actions.post.remove());
      };
    }, [token]);

    return {post, comments};
  }
);
