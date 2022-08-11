import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import './styles/index.css';
import App from './App';
import {reddit} from './config';
const {useStrictMode} = reddit.user;

const root = createRoot(document.getElementById('root'));

const withStrictMode = (
  <StrictMode>
    <App />
  </StrictMode>
);

root.render(useStrictMode ? withStrictMode : (<App />));
