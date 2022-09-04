import {userConfig} from './config';
const {useStrictMode} = userConfig;
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import './styles/index.css';
import App from './App';

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
