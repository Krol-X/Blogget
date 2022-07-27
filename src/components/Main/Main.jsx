import style from './Main.module.css';
import {assignRandomId} from '../../utils/random';

import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';

const TABS = [
  {value: 'Главная'},
  {value: 'Просмотренные', link: '/viewed'},
  {value: 'Сохранённые'},
  {value: 'Мои посты'}
].map(assignRandomId);

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs items={TABS} />
      <List />
    </Layout>
  </main>
);
