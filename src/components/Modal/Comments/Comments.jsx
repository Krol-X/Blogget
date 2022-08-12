import style from './Comments.module.css';
// import PropTypes from 'prop-types';
import DateTime from '../../Main/List/Post/DateTime';

export const Comments = (props) => (
  <ul className={style.list}>
    <li className={style.item}>
      <h3 className={style.author} size={18} tsize={22}>Maks</h3>
      <p className={style.comment} size={14} tsize={18}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fugiat natus eaque modi!
      </p>
      <DateTime date='' />
    </li>
  </ul>
);

// Comments.propTypes = {
// todo...
// };
