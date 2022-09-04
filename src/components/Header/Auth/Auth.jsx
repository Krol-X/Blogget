import {useState} from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './images/login.svg';
import {getUrlAuth} from '../../../api/reddit/auth';
import Text from '../../_shared/Text';
import {actions} from '../../../store';
import {useAuth} from '../../../hooks/useAuth';
import {useDispatch} from 'react-redux';

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
