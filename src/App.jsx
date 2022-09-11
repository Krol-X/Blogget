import Header from './components/Header';
import Main from './components/Main';

import {useToken} from './hooks/useToken';

const App = () => {
  useToken();

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
