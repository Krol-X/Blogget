import style from './Post.module.css';
import PropTypes from 'prop-types';

import Thumbnail from './Thumbnail';
import Content from './Content';
import DeleteButton from './DeleteButton';
import Rating from './Rating';
import DateTime from './DateTime';

export const Post = ({postData}) => {
  const {
    id, title, author, ups, created_utc: date
  } = postData;

  return (
    <li className={style.post}>
      <Thumbnail postData={postData} />
      <Content
        postId={id} title={title} author={author}
      />
      <DeleteButton />
      <Rating ups={ups} />
      <DateTime date={date} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object
};
