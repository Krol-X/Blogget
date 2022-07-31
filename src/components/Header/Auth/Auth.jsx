import {useState, useContext} from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './images/login.svg';
import {getUrlAuth} from '../../../api/reddit/authService';
import Text from '../../_shared/Text';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const [isLogoutBtnShow, setLogoutBtnShow] = useState(false);
  const clearToken = useContext(tokenContext)[1];
  const [auth, clearAuth] = useContext(authContext);

  const onLogout = () => {
    clearToken();
    clearAuth();
  };

  return (
    <div className={style.container}>
      {(auth && auth.name) ? (
        <>
          <button className={style.btn}
            onClick={() => setLogoutBtnShow(!isLogoutBtnShow)}
          >
            <img className={style.img} src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`} />
          </button>
          {isLogoutBtnShow && (
            <button className={style.logout}
              onClick={() => onLogout()}>
              Выйти
            </button>
          )}
        </>
      ) : (
        <Text As='a' href={getUrlAuth()}>
          <LoginIcon className={style.svg} />
        </Text>
      )}
    </div>
  );
};
