import {reddit} from './config';
const {useTestApi} = reddit.user;
import TestApi from './components/TestApi';

import {Provider} from 'react-redux';
import {store} from './store';

import Header from './components/Header';
import Main from './components/Main';

const TestApiApp = () => (
  <TestApi />
);

const MainApp = () => (
  <Provider store={store}>
    <Header />
    <Main />
  </Provider>
);

const App = useTestApi ? TestApiApp : MainApp;

export default App;
