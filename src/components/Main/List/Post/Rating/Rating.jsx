import PropTypes from 'prop-types';
import style from './Rating.module.css';

export const Rating = ({ups}) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Повысить рейтинг' />
    <p className={style.ups}>{ups}</p>
    <button className={style.down} aria-label='Понизить рейтинг' />
  </div>
);

Rating.propTypes = {
  ups: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};
