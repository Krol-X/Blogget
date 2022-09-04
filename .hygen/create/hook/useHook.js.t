---
to: <%= absPath %>/use<%= hook_name %>.js
---

import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import typeis from 'check-types';
import {actions} from '../store';

export const use<%= hook_name %> = (
  () => {
    useEffect(() => {
      // ...
    }, []);

    return null;
  }
);
