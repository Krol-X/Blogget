import style from './Main.module.css';
import {assignRandomId} from '../../utils/random';

import {ReactComponent as HomeIcon} from './Tabs/images/home.svg';
import {ReactComponent as TopIcon} from './Tabs/images/top.svg';
import {ReactComponent as BestIcon} from './Tabs/images/best.svg';
import {ReactComponent as HotIcon} from './Tabs/images/hot.svg';

import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';

const TABS = [
  {value: 'Главная', icon: HomeIcon},
  {value: 'Топ', icon: TopIcon, link: '/top'},
  {value: 'Лучшие', icon: BestIcon},
  {value: 'Горячие', icon: HotIcon}
].map(assignRandomId);

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs items={TABS} />
      <List />
    </Layout>
  </main>
);
