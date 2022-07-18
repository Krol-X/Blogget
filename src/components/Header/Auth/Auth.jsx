import style from './Auth.module.css'
import login from './images/login.svg'

export const Auth = () => (
  <button className='style.button'>
    <img className={style.photo} src={login} alt='' />
  </button>
);