import style from './Content.module.css';
import PropTypes from 'prop-types';
import Text from '../../../../_shared/Text';

export const Content = ({title, author}) => (
  <div className={style.content}>
    <h2>
      <Text As='a' className={style.linkPost}
        bold dsize={18}
        href='#post'
      >
        {title}
      </Text>
    </h2>
    <Text As='a' className={style.linkAuthor}
      dsize={12} tsize={14} color={'orange'}
      href='#author'
    >
      {author}
    </Text>
  </div>
);

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string
};
