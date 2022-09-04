import {userConfig} from './config';
const {useTestApi} = userConfig;

import TestApi from './components/TestApi';

import Header from './components/Header';
import Main from './components/Main';

const TestApiApp = () => (
  <TestApi />
);

const MainApp = () => (
  <>
    <Header />
    <Main />
  </>
);

const App = useTestApi ? TestApiApp : MainApp;

export default App;
