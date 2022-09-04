---
to: <%= absPath %>/<%= store_name %>Actions.jsx
---
import <%= store_name %>Types from './<%= store_name %>Types';

export const set = (<%= store_name %>) => ({
  type: <%= store_name %>Types.SET,
  <%= store_name %>
});
