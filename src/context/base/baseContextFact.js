import {createContext} from 'react';
import PropTypes from 'prop-types';

export default (hook, defaultValue) => {
  const context = createContext({});
  const ContextProvider = ({children}) => {
    const [value, clearValue] = hook(defaultValue);
    const {Provider} = context;

    return (
      <Provider value={[value, clearValue]}>
        {children}
      </Provider>
    );
  };
  ContextProvider.propTypes = {
    children: PropTypes.node.isRequired
  };

  return [context, ContextProvider];
};
