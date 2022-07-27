import style from './DateTime.module.css';
import PropTypes from 'prop-types';
import {formatDate} from '../../../../../utils/dateTime';

export const DateTime = ({date}) => (
  <time className={style.date} dateTime={date}>{formatDate(date)}</time>
);

DateTime.propTypes = {
  date: PropTypes.string
};
