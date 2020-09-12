import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setRawTheme] = useState(undefined);

  function setTheme(newTheme) {
    setRawTheme(newTheme);
    // TODO: Use constant for theme here and in getInitiaColorMode.js
    localStorage.setItem('theme', newTheme);
  }

  useEffect(() => {
    const root = window.document.documentElement;

    const initialColorValue = root.style.getPropertyValue('--initial-theme');

    setRawTheme(initialColorValue);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    // TODO: Extract property + values to static structure and pull in here
    root.style.setProperty('--color-text', theme === 'light' ? '#333' : '#fff');
    root.style.setProperty(
      '--color-background',
      theme === 'light' ? '#fff' : '#1e1e1e'
    );
    root.style.setProperty(
      '--link-color',
      theme === 'light' ? '#0984e3' : '#3398e6'
    );
    root.style.setProperty(
      '--item-hover-color',
      theme === 'light' ? '#f5f5f5' : '#333'
    );
    root.style.setProperty(
      '--footer-item-hover-color',
      theme === 'light' ? '#333' : '#fff'
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
