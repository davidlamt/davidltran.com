import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getInitialColorMode } from '../utils';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setRawTheme] = useState(getInitialColorMode);

  function setTheme(newValue) {
    setRawTheme(newValue);
    // TODO: Use constant for theme here and in getInitiaColorMode.js
    localStorage.setItem('theme', newValue);
  }

  useEffect(() => {
    const root = window.document.documentElement;
    // TODO: Extract property + values to static structure and pull in here
    root.style.setProperty('--color-text', theme === 'light' ? '#333' : '#fff');
    root.style.setProperty(
      '--color-background',
      theme === 'light' ? '#fff' : '#0e141b'
    );
    root.style.setProperty(
      '--item-hover-color',
      theme === 'light' ? '#f5f5f5' : '#333'
    );
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
