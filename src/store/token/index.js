import typeis from 'check-types';
import * as tokenActions from './tokenActions';
import tokenReducer from './tokenReducer';

export const checkToken = (token) => (
  typeis.nonEmptyString(token)
);

export default {
  actions: tokenActions,
  reducer: tokenReducer
};
