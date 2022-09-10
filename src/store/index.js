import {createStore, combineReducers} from 'redux';
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

const rootReducer = combineReducers({
  token: Token.reducer,
  auth: Auth.reducer,
  posts: Posts.reducer,
  post: Post.reducer
});

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(
  rootReducer, initalState,
  reduxDevTools && reduxDevTools()
);

export {actions, store};
