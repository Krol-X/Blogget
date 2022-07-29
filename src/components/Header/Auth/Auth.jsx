import {useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './images/login.svg';
import {getUrlAuth} from '../../../api/reddit/authService';
import Text from '../../_shared/Text';

export const Auth = ({auth, delToken}) => {
  const [isLogoutBtnShow, setLogoutBtnShow] = useState(false);

  const onLogout = () => {
    location = '/';
    delToken();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
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

Auth.propTypes = {
  auth: PropTypes.object,
  delToken: PropTypes.func
};
