import style from './Tabs.module.css';
import PropTypes from 'prop-types';

import Tab from './Tab';

export const Tabs = ({items}) => (
  items &&
  <ul className={style.list}>
    {
      items.map(({id, value, link}) => (
        <Tab key={id} value={value} link={link} />
      ))
    }
  </ul>
);

Tabs.propTypes = {
  items: PropTypes.array
};
