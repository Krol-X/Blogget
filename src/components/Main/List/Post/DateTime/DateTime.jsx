import PropTypes from 'prop-types';
import style from './DateTime.module.css';
import {formatDate} from '../../../../../utils/DateTime';

export const DateTime = ({date}) => (
  <time className={style.date} dateTime={date}>{formatDate(date)}</time>
);

DateTime.propTypes = {
  date: PropTypes.string
};
