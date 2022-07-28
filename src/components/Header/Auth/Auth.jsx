import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './images/login.svg';
import {getUrlAuth} from '../../../api/reddit/authService';
import Text from '../../_shared/Text';

export const Auth = ({token}) => (
  <div className={style.container}>
    {token ? (
      token
    ) : (
      <Text As='a' href={getUrlAuth()}>
        <LoginIcon className={style.svg} />
      </Text>
    )}
  </div>
);

Auth.propTypes = {
  token: PropTypes.string
};
