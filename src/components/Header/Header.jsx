import PropTypes from 'prop-types';

import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Heading from './Heading';
import Search from './Search';
import Auth from './Auth';

export const Header = ({auth, delToken}) => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo/>
        <Heading/>
        <Search/>
        <Auth auth={auth} delToken={delToken} />
      </div>
    </Layout>
  </header>
);

Header.propTypes = {
  auth: PropTypes.object,
  delToken: PropTypes.func
};

