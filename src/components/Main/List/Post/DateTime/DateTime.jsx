import style from './DateTime.module.css';
import PropTypes from 'prop-types';
import {formatDate} from '../../../../../utils/dateTime';
import Text from '../../../../_shared/Text';

export const DateTime = ({date}) => (
  <Text As='time' className={style.date}
    bold dsize={12} tsize={16}
    dateTime={date}
  >
    {formatDate(date)}
  </Text>
);

DateTime.propTypes = {
  date: PropTypes.string
};
