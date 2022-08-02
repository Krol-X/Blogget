const getPostThumbnail = ({thumbnail, url}) => {
  if (thumbnail === 'image') {
    return url;
  }
  if (thumbnail === 'self' ||
    thumbnail === 'default' ||
    thumbnail === 'nsfw') {
    return '';
  }
  return thumbnail;
};

export default getPostThumbnail;
