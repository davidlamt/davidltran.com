/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import PropTypes from 'prop-types';

import App from './src/components/App';

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};

wrapRootElement.propTypes = {
  element: PropTypes.node,
};
