export const POST_SET = 'POST_SET';
export const POST_REMOVE = 'POST_REMOVE';

export const set = (post, comments) => ({
  type: POST_SET,
  payload: {post, comments}
});

export const remove = () => ({
  type: POST_REMOVE
});
