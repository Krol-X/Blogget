import typeis from 'check-types';
import {generateRandomId} from '../../../utils/random';

import style from './List.module.css';
import {usePosts} from '../../../hooks/usePosts';
import Post from './Post';

export const List = () => {
  const {data: posts} = usePosts();

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
