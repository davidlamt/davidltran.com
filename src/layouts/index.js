import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import './index.css';

const TemplateWrapper = ({ children }) => (
  <div
    style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Helmet
      title="David Tran"
      meta={[
        { name: 'description', content: 'David Tran Personal Site' },
        { name: 'keywords', content: 'Software Development, Personal Thoughts, Offline Adventures' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: '40rem',
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        flex: 1,
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

TemplateWrapper.defaultProps = {
  children: function renderChildren() {},
};

export default TemplateWrapper;
