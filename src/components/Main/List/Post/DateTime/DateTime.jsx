import PropTypes from 'prop-types';
import {formatDate} from '../../../../../utils/dateTime';

import style from './DateTime.module.css';
import Text from '../../../../_shared/Text';

export const DateTime = ({date}) => {
  const dateStr = formatDate(date);

  return (
    <Text As='time' className={style.date}
      bold dsize={12} tsize={16}
      dateTime={dateStr}
    >
      {dateStr}
    </Text>
  );
};

DateTime.propTypes = {
  date: PropTypes.number
};
