---
to: <%= absPath %>/index.jsx
---

import * as <%= store_name %>Actions from './<%= store_name %>Actions';
import <%= store_name %>Reducer from './<%= store_name %>Reducer';

export default {
  actions: <%= store_name %>Actions,
  reducer: <%= store_name %>Reducer
};
