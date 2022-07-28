import style from './Tab.module.css';
import pstyle from '../Tabs.module.css';
import PropTypes from 'prop-types';
import Text from '../../../_shared/Text';

export const Tab = ({value, Icon, link, onClick}) => (
  <li className={style.item}>
    <Text As="button" className={pstyle.btn} onClick={onClick}>
      {value}
      {Icon && <Icon width={24} height={24} />}
    </Text>
  </li>
);

Tab.propTypes = {
  value: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
  Icon: PropTypes.object
};
