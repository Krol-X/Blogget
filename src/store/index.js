import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';

import Token from './token';
import Auth from './auth';
import Posts from './posts';
import Post from './post';

import thunk from 'redux-thunk';
import {logger} from '../middlewares/logger';
import {tokenMiddleware} from './token/tokenMiddleware';

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

const middlewares = [
  thunk,
  logger,
  tokenMiddleware
];

const store = createStore(
  rootReducer, initalState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export {actions, store};
