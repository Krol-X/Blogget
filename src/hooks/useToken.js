import {useState, useEffect} from 'react';
import {getTokenFromLocation} from '../api/reddit/authService';

export default (defaultToken) => {
  const [token, setToken] = useState(defaultToken);

  useEffect(() => {
    const newToken = getTokenFromLocation();

    if (newToken) {
      setToken(newToken);
    } else {
      const storageToken = localStorage.getItem('bearer');
      if (storageToken && typeof storageToken === 'string') {
        console.log(storageToken);
        setToken(storageToken);
      }
    }
  }, []);

  useEffect(() => {
    console.log(token);
    if (token) {
      localStorage.setItem('bearer', token);
    }
  }, [token]);

  const delToken = () => {
    setToken('');
    localStorage.setItem('bearer', '');
  };

  return [token, delToken];
};
