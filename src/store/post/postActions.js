import {checkToken} from '../token';
import {redditComments} from '../../api/reddit/read';
import {Parser} from '../../api/reddit/Parser';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';
export const POST_SET = 'POST_SET';
export const POST_REMOVE = 'POST_REMOVE';

export const success = (post) => ({
  type: POST_SUCCESS,
  payload: post
});

export const failure = (error) => ({
  type: POST_FAILURE,
  err: error
});

export const set = (post, comments) => ({
  type: POST_SET,
  payload: {post, comments}
});

export const remove = () => ({
  type: POST_REMOVE
});

export const request = (postId) => (dispatch, getState) => {
  const token = getState().token;
  if (!checkToken(token)) return;

  redditComments(token, {}, postId).then(rawData => {
    const p = new Parser(rawData);
    const newPost = p.get();
    const newComments = p.get_comments_all();
    dispatch(set(newPost, newComments));
  });
};
