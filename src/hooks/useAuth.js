import {useState, useEffect, useContext} from 'react';
import {tokenContext} from '../context/tokenContext';
import {redditMe} from '../api/reddit/identityService';

export default (defaultToken) => {
  const [auth, setAuth] = useState({});
  const {token, clearToken} = useContext(tokenContext);

  const clearAuth = () => setAuth({});

  useEffect(() => {
    if (!token) return;

    redditMe(token).then(({name, icon_img: iconImg}) => {
      const img = iconImg.replace(/\?.*$/, '');
      setAuth({name, img});
    }).catch(err => {
      console.error(err);
      clearToken();
      clearAuth();
    });
  }, [token]);

  return [auth, clearAuth];
};
