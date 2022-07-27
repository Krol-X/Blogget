import style from './Tabs.module.css';
import Text from '../../_shared/Text';

export const Tabs = (props) => (
  <ul className={style.list}>
    <li><Text As='a' href='/'>Главная</Text></li>
    <li><Text As='a' href='/'>Просмотренные</Text></li>
    <li><Text As='a' href='/'>Сохранённые</Text></li>
    <li><Text As='a' href='/'>Мои посты</Text></li>
  </ul>
);
