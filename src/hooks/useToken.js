import {reddit} from '../config';
const {showToken} = reddit.user;
import typeis from 'check-types';
import {useState, useEffect} from 'react';
import {getTokenFromLocation} from '../api/reddit/authService';

export default (defaultToken) => {
  const [token, setToken] = useState(defaultToken);

  const clearToken = () => {
    setToken('');
    localStorage.removeItem('bearer');
  };

  useEffect(() => {
    const newToken = getTokenFromLocation();

    if (newToken) {
      if (showToken) {
        console.log('NEW TOKEN:', newToken);
      }
      setToken(newToken);
      history.replaceState(null, document.title, '/');
    } else {
      const storageToken = localStorage.getItem('bearer');
      if (typeis.string(storageToken)) {
        if (showToken) {
          console.log('USE LOCAL TOKEN:', storageToken);
        }
        setToken(storageToken);
      }
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token);
    }
  }, [token]);

  return [token, clearToken];
};
