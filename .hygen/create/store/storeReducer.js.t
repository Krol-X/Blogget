---
to: <%= absPath %>/<%= store_name %>Reducer.jsx
---
import <%= store_name %>Types from './<%= store_name %>Types';
const {SET, REMOVE} = <%= store_name %>Types;

const set = (state, action) => {
  const result = {
    ...state,
    <%= store_name %>: action.<%= store_name %>
  };
  return result;
};

const remove = (state, action) => {
  delete state.<%= store_name %>;
  return result;
};

const reducer = {
  [SET]: set,
  [REMOVE]: remove
};

export default reducer;
