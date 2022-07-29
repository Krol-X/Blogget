import {TokenContextProvider} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';

import Header from './components/Header';
import Main from './components/Main';

const App = () => (
  <TokenContextProvider>
    <AuthContextProvider>
      <Header />
      <Main />
    </AuthContextProvider>
  </TokenContextProvider>
);

export default App;
