import style from './Thumbnail.module.css';
import PropTypes from 'prop-types';
import getPostThumbnail from '../../../../../api/reddit/utils/getPostThumbnail';
import notphoto from './images/notphoto.jpg';

export const Thumbnail = ({postData}) => {
  const imageSrc = getPostThumbnail(postData) || notphoto;

  return (
    <div className={style.wrapper}>
      <img className={style.img} src={imageSrc} alt='Нет фотографии' />
    </div>
  );
};

Thumbnail.propTypes = {
  postData: PropTypes.object
};
