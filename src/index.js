import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import './styles/index.css';
import App from './App';
import {reddit} from './config';
const {useStrictMode} = reddit.user;

const root = createRoot(document.getElementById('root'));

const app = (
  <App />
);

const withStrictMode = (
  <StrictMode>
    {app}
  </StrictMode>
);

root.render(useStrictMode ? withStrictMode : app);
