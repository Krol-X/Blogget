import {useEffect, useRef} from 'react';

import style from './FormComment.module.css';
import pstyle from '../Modal.module.css';
import Text from '../../_shared/Text';

export const FormComment = (props) => {
  const eTextArea = useRef();

  useEffect(() => {
    eTextArea.current.focus();
  }, []);

  return (
    <form className={style.form}>
      <Text As='h3' size={14} tsize={18}>
        Имя авторизованного пользователя
      </Text>
      <textarea ref={eTextArea} className={style.textarea}></textarea>
      <button className={pstyle.btn + ' ms-auto'}>Отправить</button>
    </form>
  );
};
