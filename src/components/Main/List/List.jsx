import style from './List.module.css';

import Post from './Post';

const postData = {
  thumbnail: '',
  title: 'Title',
  author: 'nickname',
  ups: 24,
  date: '2022-02-04T01:45:00.000Z'
};

export const List = (props) => (
  <ul className={style.list}>
    <Post postData={postData} />
  </ul>
);
