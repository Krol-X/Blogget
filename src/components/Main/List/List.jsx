import style from './List.module.css';
import typeis from 'check-types';
import {generateRandomId} from '../../../utils/random';
import {usePosts} from '../../../hooks/usePosts';

import Post from './Post';

export const List = () => {
  const posts = usePosts();

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
