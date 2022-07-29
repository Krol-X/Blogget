import {useState, useEffect} from 'react';
import {redditMe} from './api/reddit/identityService';
import useToken from './hooks/useToken';

import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  const [token, delToken] = useToken('');
  const [auth, setAuth] = useState({});

  useEffect(() => {
    if (token) {
      redditMe(token).then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      }).catch(err => {
        console.error(err);
        delToken();
      });
    }
  }, [token]);

  return (
    <>
      <Header auth={auth} delToken={delToken} />
      <Main/>
    </>
  );
};

export default App;
