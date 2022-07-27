import style from './Tab.module.css';
import pstyle from '../Tabs.module.css';
import PropTypes from 'prop-types';
import Text from '../../../_shared/Text';

export const Tab = ({value, link, onClick}) => (
  <li className={style.item}>
    <button className={pstyle.btn} onClick={onClick}>
      <Text>{value}</Text>
    </button>
  </li>
);

Tab.propTypes = {
  value: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.function
};
