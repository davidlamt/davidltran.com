import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import colors, { INITIAL_THEME_CSS_PROP, THEME_KEY } from '../data/colors';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setRawTheme] = useState(undefined);

  function setTheme(newTheme) {
    setRawTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  }

  useEffect(() => {
    const root = window.document.documentElement;

    const initialColorValue = root.style.getPropertyValue(
      INITIAL_THEME_CSS_PROP
    );

    setRawTheme(initialColorValue);
  }, []);

  useEffect(() => {
    if (!theme) return;

    const root = window.document.documentElement;

    Object.entries(colors).forEach(([name, colorByTheme]) => {
      const cssVarName = `--color-${name}`;

      root.style.setProperty(cssVarName, colorByTheme[theme]);
    });
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
