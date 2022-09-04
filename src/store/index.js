import {createStore} from 'redux';
import Token from './token';
import Auth from './auth';
import Posts from './posts';
import Post from './post';

const initalState = {};

const actions = {
  token: Token.actions,
  auth: Auth.actions,
  posts: Posts.actions,
  post: Post.actions
};

const reducers = {
  ...Token.reducer,
  ...Auth.reducer,
  ...Posts.reducer,
  ...Post.reducer
};

const rootReducer = (state = initalState, action) => {
  const reducer = reducers[action.type] || (() => (state));
  const result = reducer(state, action);
  return result;
};

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export {actions, store};
