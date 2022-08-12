import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {useEffect} from 'react';
import {createPortal} from 'react-dom';
import {
  disableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock';
import Markdown from 'markdown-to-jsx';

import {ReactComponent as CloseIcon} from './images/close.svg';
import Comments from './Comments';
import FormComment from './FormComment';

export const Modal = ({title, markdown, author, onClose}) => {
  useEffect(() => {
    const targetElement = document.querySelector('#modal-root');
    disableBodyScroll(targetElement);

    const onEscapeDown = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keyup', onEscapeDown);

    return () => {
      clearAllBodyScrollLocks();
      window.removeEventListener('keyup', onEscapeDown);
    };
  }, []);

  return createPortal(
    <div className={style.overlay}>
      <div className={style.modal}>
        <h2 className={style.title}>{title}</h2>

        <div className={style.content}>
          <Markdown options={{
            overrides: {
              a: {
                props: {target: '_blank'}
              }
            }
          }}>
            {markdown}
          </Markdown>
        </div>

        <p className={style.author}>by {author}</p>

        <FormComment />
        <Comments />

        <button className={style.close} onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  markdown: PropTypes.string,
  author: PropTypes.string,
  onClose: PropTypes.func
};
