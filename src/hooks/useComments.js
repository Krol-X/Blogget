import {useState, useEffect, useContext} from 'react';
import {tokenContext} from '../context/tokenContext';
import {redditComments} from '../api/reddit/readService';
import {Parser} from '../api/reddit/Parser';

export default (postId) => {
  const [token] = useContext(tokenContext);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    redditComments(token, {}, postId).then(rawData => {
      const p = new Parser(rawData);
      const newPost = p.get();
      const newComments = p.get_comments_all();
      setPost(newPost);
      setComments(newComments);
    });
    // todo: error handler
  }, []);

  return {comments, post};
};
