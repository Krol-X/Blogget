import style from './Content.module.css';
import PropTypes from 'prop-types';
import Text from '../../../../_shared/Text';

export const Content = ({title, author}) => (
  <div className={style.content}>
    <Text As='h2' className={style.title}>
      <Text As='a' className={style.linkPost} href='#post'>
        {title}
      </Text>
    </Text>
    <Text As='a' className={style.linkAuthor} href='#author'>
      {author}
    </Text>
  </div>
);

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string
};
