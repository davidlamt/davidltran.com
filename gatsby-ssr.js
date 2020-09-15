/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';

const SetInitialTheme = () => {
  const codeToRunOnClient = `
(function() {
  function getInitialTheme() {
    const persistedColorPreference = window.localStorage.getItem('theme');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';
  
    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
  
    // If they haven't been explicit, let's check the media query
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }
  
    // If they are using a browser/OS that doesn't support
    // color themes, let's default to 'light'.
    return 'light';
  }

  const theme = getInitialTheme();

  const root = window.document.documentElement;
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
  root.style.setProperty(
    '--experience-date-background',
    theme === 'light' ? '#f5f5f5' : '#333'
  );
  root.style.setProperty(
    '--experience-line-color',
    theme === 'light' ? '#d9dee7' : '#333'
  );
  root.style.setProperty(
    '--experience-diamond-color',
    theme === 'light' ? '#333' : '#9e9e9e'
  );

  root.style.setProperty('--initial-theme', theme);
})()
  `;
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<SetInitialTheme />);
};
