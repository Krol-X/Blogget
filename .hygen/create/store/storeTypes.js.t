---
to: <%= absPath %>/<%= store_name %>Types.jsx
---
const types = {
  SET: '<%= store_name.toUpperCase() %>_SET',
  REMOVE: '<%= store_name.toUpperCase() %>_REMOVE'
};

export default types;
