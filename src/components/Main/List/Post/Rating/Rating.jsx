import style from './Rating.module.css';
import PropTypes from 'prop-types';
import Text from '../../../../_shared/Text';

export const Rating = ({ups}) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Повысить рейтинг' />
    <Text As='p' className={style.ups}>{ups}</Text>
    <button className={style.down} aria-label='Понизить рейтинг' />
  </div>
);

Rating.propTypes = {
  ups: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};
