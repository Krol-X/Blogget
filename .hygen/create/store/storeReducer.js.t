---
to: <%= absPath %>/<%= store_name %>Reducer.jsx
---
import <%= store_name %>Types from './<%= store_name %>Types';
const {SET} = <%= store_name %>Types;

const set = (state, action) => {
  const result = {
    ...state,
    <%= store_name %>: action.<%= store_name %>
  };
  return result;
};

const reducer = {
  [SET]: set
};

export default reducer;
