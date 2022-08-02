import style from './List.module.css';
import {useContext} from 'react';
import {postsContext} from '../../../context/postsContext';
import {generateRandomId} from '../../../utils/random';

import Post from './Post';

export const List = () => {
  const [posts] = useContext(postsContext);

  return (
    posts.length && posts.map(({data: post}) => {
      const randId = post.link_flair_template_id + generateRandomId();

      return (
        <ul key={randId} className={style.list}>
          <Post postData={post} />
        </ul>
      );
    })
  );
};
