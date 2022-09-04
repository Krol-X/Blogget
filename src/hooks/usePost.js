import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../store';
import {redditComments} from '../api/reddit/read';
import {Parser} from '../api/reddit/Parser';
import {useToken} from './useToken';

export const usePost = (
  (postId) => {
    const dispatch = useDispatch();
    const token = useToken();
    const post = useSelector(state => state?.post?.data);
    const comments = useSelector(state => state?.post?.comments);

    useEffect(() => {
      if (!token) return;

      dispatch(actions.post.set());
      redditComments(token, {}, postId).then(rawData => {
        const p = new Parser(rawData);
        const newPost = p.get();
        const newComments = p.get_comments_all();
        dispatch(actions.post.set(newPost, newComments));
      });
    }, [token]);

    return {post, comments};
  }
);
