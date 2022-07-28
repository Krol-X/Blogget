import {beApiRequest} from './utils/apiRequest';

export default const Identity = {
  me: beApiRequest('/me')
};
