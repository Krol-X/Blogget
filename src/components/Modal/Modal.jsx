import style from './Modal.module.css';
import PropTypes from 'prop-types';
import typeis from 'check-types';
import {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {
  disableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock';
import Markdown from 'markdown-to-jsx';

import {ReactComponent as CloseIcon} from './images/close.svg';
import Comments from './Comments';
import FormComment from './FormComment';

import useComments from '../../hooks/useComments';

export const Modal = ({postId, onClose}) => {
  const [isFormCommentOpen, setFormComentOpen] = useState(false);

  const {post, comments} = useComments(postId);

  useEffect(() => {
    // Disable scrool on root
    const targetElement = document.querySelector('#modal-root');
    disableBodyScroll(targetElement);

    // Set [Esc] key handler
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
        {typeis.nonEmptyObject(post) && (
          <>
            <h2 className={style.title}>{post?.title}</h2>

            <div className={style.content}>
              <Markdown options={{
                overrides: {
                  a: {
                    props: {target: '_blank'}
                  }
                }
              }}>
                {post?.selftext || ''}
              </Markdown>
            </div>

            <p className={style.author}>by {post?.author}</p>

            <button className={style.btn} onClick={
              () => setFormComentOpen(!isFormCommentOpen)
            }>
              Новый комментарий
            </button>
            {isFormCommentOpen && <FormComment />}
            <Comments comments={comments} />

            <button className={style.close} onClick={onClose}>
              <CloseIcon />
            </button>
          </>
        ) || (
          <h2>Загрузка...</h2>
        )}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  postId: PropTypes.string,
  onClose: PropTypes.func
};
