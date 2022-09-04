import authTypes from './authTypes';
const {SET, REMOVE} = authTypes;

const set = (state, action) => {
  const result = {
    ...state,
    auth: action.auth
  };
  return result;
};

const remove = (state, action) => {
  delete state.auth;
  return state;
};

const reducer = {
  [SET]: set,
  [REMOVE]: remove
};

export default reducer;
