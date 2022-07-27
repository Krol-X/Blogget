import PropTypes from 'prop-types';
// import style from './Tab.module.css';
import Text from '../../../_shared/Text';

export const Tab = ({value, link}) => (
  <li>
    <Text As='a' href={link || '/'}>
      {value}
    </Text>
  </li>
);

Tab.propTypes = {
  value: PropTypes.string,
  link: PropTypes.string
};
