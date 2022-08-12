import style from './FormComment.module.css';
// import PropTypes from 'prop-types';

export const FormComment = (props) => (
  <form className={style.form}>
    <h3 size={14} tsize={18}>Имя авторизованного пользователя</h3>
    <textarea className={style.textarea}></textarea>
    <button className={style.btn}>Отправить</button>
  </form>
);

// FormComment.propTypes = {
// todo...
// };
