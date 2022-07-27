import style from './Image.module.css';
import notphoto from './images/notphoto.jpg';

export const Image = (props) => (
  <img className={style.img} src={notphoto} alt='Нет фотографии' />
);
