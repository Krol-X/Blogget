import {tokenContext} from './context/tokenContext';
import {authContext} from './context/authContext';

import Header from './components/Header';
import Main from './components/Main';

const {Provider: TokenProvider} = tokenContext;
const {Provider: AuthProvider} = authContext;

const App = () => (
  <TokenProvider>
    <AuthProvider>
      <Header />
      <Main />
    </AuthProvider>
  </TokenProvider>
);

export default App;
