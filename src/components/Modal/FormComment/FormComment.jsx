import style from './FormComment.module.css';
import pstyle from '../Modal.module.css';
import {useEffect, useRef} from 'react';

export const FormComment = (props) => {
  const eTextArea = useRef();

  useEffect(() => {
    eTextArea.current.focus();
  }, []);

  return (
    <form className={style.form}>
      <h3 size={14} tsize={18}>Имя авторизованного пользователя</h3>
      <textarea ref={eTextArea} className={style.textarea}></textarea>
      <button className={pstyle.btn + ' ms-auto'}>Отправить</button>
    </form>
  );
};
