// import style from './TestApi.module.css';
// import PropTypes from 'prop-types';
import {getTokenFromLocation, getUrlAuth} from '../../api/reddit/authService';
import {redditMe} from '../../api/reddit/identityService';
import {
  redditBest,
  redditInfo,
  redditComments
} from '../../api/reddit/readService';

import {useEffect} from 'react';

export const TestApi = (props) => {
  useEffect(() => {
    console.log(123);
    const token = getTokenFromLocation();
    if (token) {
      console.log(`TOKEN: ${token}`);

      const apiCall = (name, call, ...args) => {
        call(token, ...args).then(resp => {
          console.log('%s: %o', name, resp);
        });
      };

      redditMe; redditBest; redditInfo;
      // apiCall('/api/v1/me', redditMe);
      // apiCall('/best', redditBest);
      // apiCall('/api/info', redditInfo, {id: 't3_wlkpth'});
      apiCall('/comments/:id36', redditComments, {}, 'wlkpth');
    }
  }, []);

  return (
    <div>
      <a href={getUrlAuth()}>Login</a>
    </div>
  );
};

// Test.propTypes = {
// todo...
// };
