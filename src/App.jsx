import {reddit} from './config';
const {useTestApi} = reddit.user;

import TestApi from './components/TestApi';

import {TokenContextProvider} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';
import {PostsContextProvider} from './context/postsContext';

import Header from './components/Header';
import Main from './components/Main';

const TestApiApp = () => (
  <TestApi />
);

const MainApp = () => (
  <TokenContextProvider>
    <AuthContextProvider>
      <PostsContextProvider>
        <Header />
        <Main />
      </PostsContextProvider>
    </AuthContextProvider>
  </TokenContextProvider>
);

const App = useTestApi ? TestApiApp : MainApp;

export default App;
