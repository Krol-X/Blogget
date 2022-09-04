import {useState} from 'react';
import {actions} from '../../../store';
import {getUrlAuth} from '../../../api/reddit/auth';

import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './images/login.svg';
import {useDispatch} from 'react-redux';
import {useAuth} from '../../../hooks/useAuth';
import Text from '../../_shared/Text';

export const Auth = () => {
  const dispatch = useDispatch();
  const [isLogoutBtnShow, setLogoutBtnShow] = useState(false);
  const auth = useAuth();

  const onLogout = () => {
    dispatch(actions.token.set());
    dispatch(actions.auth.set());
    dispatch(actions.posts.set());
  };

  return (
    <div className={style.container}>
      {(auth && auth.name) ? (
        <>
          <button className={style.btn}
            onClick={() => setLogoutBtnShow(!isLogoutBtnShow)}
          >
            <img className={style.img} src={auth.icon}
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
