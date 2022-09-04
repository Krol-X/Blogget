import PropTypes from 'prop-types';
import typeis from 'check-types';

import style from './Tabs.module.css';
import {ReactComponent as ArrowIcon} from './images/arrow.svg';
import {useState, useEffect} from 'react';
import Tab from './Tab';

export const Tabs = ({items}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [caption, setCatpion] = useState('Меню');

  const handleResize = () => {
    const flag = (document.documentElement.clientWidth < 768);
    setIsDropdown(flag);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onItemClick = (itemValue) => {
    if (isDropdown) {
      setCatpion(itemValue);
    }
  };

  return (typeis.nonEmptyArray(items)) && (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn}>
          <button className={style.btn}
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            {caption}
            <ArrowIcon width={18} height={24} />
          </button>
        </div>
      )}

      {(isDropdownOpen || !isDropdown) && (
        <ul className={style.list} onClick={() => setDropdownOpen(false)}>
          {items.map(({id, value, icon, link}) => (
            <Tab key={id} value={value} Icon={icon} link={link}
              onClick={() => onItemClick(value)} />
          ))}
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  items: PropTypes.array
};
