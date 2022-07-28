import {useState, useEffect} from 'react';
import {getTokenFromLocation} from '../api/reddit/authService';

export default (defaultToken) => {
  const [token, setToken] = useState(defaultToken);

  useEffect(() => {
    const newToken = getTokenFromLocation();
    if (newToken) {
      setToken(newToken);
    }

    if (localStorage.getItem('bearer')) {
      setToken(localStorage.getItem('bearer'));
    }
    console.log(token);
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token);
    }
  }, [token]);

  return [token];
};
