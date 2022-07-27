import style from './Heading.module.css';
import PropTypes from 'prop-types';
import Text from '../../_shared/Text';

export const Heading = ({text}) => (
  <Text As='h1' className={style.heading}
    center dsize={22} tsize={26}
  >
    {text || 'Blogget'}
  </Text>
);

Heading.propTypes = {
  text: PropTypes.string
};
