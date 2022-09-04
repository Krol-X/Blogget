import authTypes from './authTypes';
const {SET} = authTypes;

const set = (state, action) => {
  const result = {
    ...state,
    auth: action.auth
  };
  return result;
};

const reducer = {
  [SET]: set
};

export default reducer;
