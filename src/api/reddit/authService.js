export const getTokenFromLocation = () => {
  const locHash = location.hash.substring(1);
  const token = new URLSearchParams(locHash)
    .get('access_token');
  return token;
};
