import style from './Content.module.css';
import PropTypes from 'prop-types';
import {useState} from 'react';
import Text from '../../../../_shared/Text';

import Modal from '../../../../Modal';

export const Content = ({postId, title, author}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className={style.content}>
      <h2>
        <Text As='a' className={style.linkPost}
          size={14} tsize={22} bold
          href='#post'
          onClick={() => setModalOpen(true)}
        >
          {title}
        </Text>
      </h2>
      <Text As='a' className={style.linkAuthor}
        size={12} tsize={14} medium color='orange'
        href='#author'
      >
        {author}
      </Text>
      {isModalOpen &&
        <Modal
          postId={postId}
          onClose={() => setModalOpen(false)}
        />
      }
    </div>
  );
};

Content.propTypes = {
  postId: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string
};
