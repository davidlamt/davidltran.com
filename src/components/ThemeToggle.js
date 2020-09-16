import React from 'react';
import styled from 'styled-components';

import { useThemeProvider } from '../hooks';

import MoonSvg from '../images/moon.svg';
import SunSvg from '../images/sun.svg';

const ThemeButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  height: 100%;
  margin-left: 10px;
  opacity: 0.7;
  outline: none;
  padding: 0;
  width: 24px;

  &:hover {
    opacity: 1;
  }
`;

const ThemeToggle = () => {
  const { theme, setTheme } = useThemeProvider();

  let icon;
  if (theme) {
    icon = <img src={theme === 'light' ? MoonSvg : SunSvg} />;
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return <ThemeButton onClick={toggleTheme}>{icon}</ThemeButton>;
};

export default ThemeToggle;
