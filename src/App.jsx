import {useEffect} from 'react';
import {redditMe} from './api/reddit/identityService';
import useToken from './hooks/useToken';

import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  const [token] = useToken('');

  useEffect(() => {
    redditMe(token).then((data) => {
      console.log(data);
    });
  }, [token]);

  return (
    <>
      <Header/>
      <Main/>
    </>
  );
};

export default App;
