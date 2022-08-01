import beBaseContext from './base/baseContextFact';
import usePosts from '../hooks/usePosts';

const [postsContext, PostsContextProvider] =
  beBaseContext(usePosts, []);

export {postsContext, PostsContextProvider};
