// import style from './TestApi.module.css';
// import PropTypes from 'prop-types';
import {useEffect} from 'react';
import {getTokenFromLocation, getUrlAuth} from '../../api/reddit/auth';
import {redditMe} from '../../api/reddit/identity';
import {
  redditBest,
  redditInfo,
  redditComments
} from '../../api/reddit/read';
// import {Parser} from '../../api/reddit/Parser';

export const TestApi = (props) => {
  useEffect(() => {
    const token = getTokenFromLocation();
    if (token) {
      console.log(`TOKEN: ${token}`);

      const apiCall = (name, call, ...args) => {
        call(token, ...args).then(resp => {
          console.log('%s: %o', name, resp);

          // const p = new Parser(resp);
          // console.log(p.count(), p.get(-1));
        });
      };

      redditMe; redditBest; redditInfo;
      apiCall('/api/v1/me', redditMe);
      apiCall('/best', redditBest);
      apiCall('/api/info', redditInfo, {id: 't3_wlkpth'});
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
