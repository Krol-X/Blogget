import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {useEffect} from 'react';
import {ReactComponent as CloseIcon} from './images/close.svg';

export const Modal = ({title, author, onClose}) => {
  useEffect(() => {
    const onEscapeDown = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keyup', onEscapeDown);
    return () => {
      window.removeEventListener('keyup', onEscapeDown);
    };
  }, []);

  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <h2 className={style.title}>{title}</h2>

        <div className={style.content}>
          <p>1</p>
          <p>2</p>
        </div>

        <p className={style.author}>by {author}</p>

        {/* FormComment && Comments */}

        <button className={style.close} onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  onClose: PropTypes.func
};
