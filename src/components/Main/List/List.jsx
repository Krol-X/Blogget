import style from './List.module.css';
import {useContext} from 'react';
import typeis from 'check-types';
import {postsContext} from '../../../context/postsContext';
import {generateRandomId} from '../../../utils/random';

import Post from './Post';

export const List = () => {
  const [posts] = useContext(postsContext);

  return (
    <ul className={style.list}>
      {(typeis.nonEmptyArray(posts)) && posts.map(({data: post}) => {
        const randId = post.link_flair_template_id + generateRandomId();
        return (
          <Post key={randId} postData={post} />
        );
      })}
    </ul>
  );
};
