import style from './Post.module.css';
import PropTypes from 'prop-types';

import Image from './Image';
import Content from './Content';
import DeleteButton from './DeleteButton';
import Rating from './Rating';
import DateTime from './DateTime';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;

  return (
    <li className={style.post}>
      <Image />
      <Content title={title} author={author} />
      <DeleteButton />
      <Rating ups={ups} />
      <DateTime date={date} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object
};
