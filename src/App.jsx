import {userConfig} from './config';
const {useTestApi} = userConfig;
import {Provider} from 'react-redux';
import {store} from './store';

import TestApi from './components/TestApi';

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
