import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const searchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  return <searchContext.Provider value={{ inputValue, setInputValue }}>{children}</searchContext.Provider>;
};

SearchProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
