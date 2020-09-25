import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

import ThemeProvider from './ThemeProvider';

require('prismjs/themes/prism-okaidia.css');

const GlobalStyles = createGlobalStyle`
  body {
    background-color: var(--color-background);
    color: var(--color-text);
    transition: all 0.2s ease;
  }

  a {
    color: var(--color-link);
  }
`;

const App = ({ children }) => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
