import style from './Logo.module.css';
import logo from './images/logo.svg';

export const Logo = () => (
  <a className={style.link} href='/'>
    <img src={logo} alt='Blogget logo'/>
  </a>
);
