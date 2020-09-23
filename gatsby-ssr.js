/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import PropTypes from 'prop-types';

import App from './src/components/App';

import colors, {
  DARK,
  INITIAL_THEME_CSS_PROP,
  LIGHT,
  THEME_KEY,
} from './src/data/colors';

const PLACEHOLDERS = {
  COLORS: "'__REPLACE_COLORS__'",
  DARK: '__REPLACE_DARK__',
  INITIAL_THEME_CSS_PROP: '__REPLACE_INITIAL_THEME_CSS_PROP__',
  LIGHT: '__REPLACE_LIGHT__',
  THEME_KEY: '__REPLACE_THEME_KEY__',
};

const setColorsByTheme = () => {
  const colors = '__REPLACE_COLORS__';
  const dark = '__REPLACE_DARK__';
  const initialThemeCssProp = '__REPLACE_INITIAL_THEME_CSS_PROP__';
  const light = '__REPLACE_LIGHT__';
  const themeKey = '__REPLACE_THEME_KEY__';

  function getInitialTheme() {
    const persistedColorPreference = window.localStorage.getItem(themeKey);
    const hasPersistedPreference = typeof persistedColorPreference === 'string';

    if (hasPersistedPreference) {
      return persistedColorPreference;
    }

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? dark : light;
    }

    return light;
  }

  const theme = getInitialTheme();

  const root = window.document.documentElement;

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`;

    root.style.setProperty(cssVarName, colorByTheme[theme]);
  });

  root.style.setProperty(initialThemeCssProp, theme);
};

const SetInitialTheme = () => {
  const functionStr = String(setColorsByTheme)
    .replace(PLACEHOLDERS.COLORS, JSON.stringify(colors))
    .replace(PLACEHOLDERS.DARK, DARK)
    .replace(PLACEHOLDERS.INITIAL_THEME_CSS_PROP, INITIAL_THEME_CSS_PROP)
    .replace(PLACEHOLDERS.LIGHT, LIGHT)
    .replace(PLACEHOLDERS.THEME_KEY, THEME_KEY);

  const codeToRunOnClient = `(${functionStr})()`;

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

const FallbackStyles = () => {
  const cssVarStr = Object.entries(colors).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme[LIGHT]};`;
    },
    ''
  );

  const wrappedInSelector = `html { ${cssVarStr} }`;

  return <style>{wrappedInSelector}</style>;
};

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents(<FallbackStyles />);
  setPreBodyComponents(<SetInitialTheme />);
};

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};

wrapRootElement.propTypes = {
  element: PropTypes.node,
};
