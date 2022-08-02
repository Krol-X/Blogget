import style from './Image.module.css';
import PropTypes from 'prop-types';
import getPostThumbnail from '../../../../../api/reddit/utils/getPostThumbnail';
import notphoto from './images/notphoto.jpg';

export const Image = ({postData}) => {
  const imageSrc = getPostThumbnail(postData) || notphoto;

  return (
    <img className={style.img} src={imageSrc} alt='Нет фотографии' />
  );
};

Image.propTypes = {
  postData: PropTypes.object
};
