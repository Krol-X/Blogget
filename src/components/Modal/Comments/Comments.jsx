import PropTypes from 'prop-types';
import typeis from 'check-types';

import style from './Comments.module.css';
import Markdown from 'markdown-to-jsx';
import Text from '../../_shared/Text';
import DateTime from '../../Main/List/Post/DateTime';

export const Comments = ({comments}) =>
  typeis.nonEmptyArray(comments) && (
    <ul className={style.list}>
      {comments.map(({id, author, body, created_utc: date}) => (
        <li key={id} className={style.item}>
          <Text As='h3' className={style.author} size={18} tsize={22}>
            {author}
          </Text>
          <Text As='div' className={style.comment} size={14} tsize={18}>
            <Markdown options={{
              overrides: {
                a: {
                  props: {target: '_blank'}
                }
              }
            }}>
              {body || ''}
            </Markdown>
          </Text>
          <DateTime date={date} />
        </li>
      ))}
    </ul>
  );

Comments.propTypes = {
  comments: PropTypes.array
};
