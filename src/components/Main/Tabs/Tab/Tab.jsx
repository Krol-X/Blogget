import PropTypes from 'prop-types';
import style from './Tab.module.css';
import pstyle from '../Tabs.module.css';

export const Tab = ({value, link}) => (
  <li className={style.item}>
    <button className={pstyle.btn}>
      {value}
    </button>
  </li>
);

Tab.propTypes = {
  value: PropTypes.string,
  link: PropTypes.string
};
