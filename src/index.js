import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './store';

import './styles/index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);


root.render(app);
