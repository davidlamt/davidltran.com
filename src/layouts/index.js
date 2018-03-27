import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import './index.css';

require('prismjs/themes/prism.css');

const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 40rem;
  width: 100%;
  padding: 0px 1.0875rem 1.45rem;
  flex: 1;
`;

const TemplateWrapper = ({ children }) => (
  <HomeContainer>
    <Helmet
      title="David Tran"
      meta={[
        { name: 'description', content: "David Tran's Personal Site" },
        { name: 'keywords', content: 'Software Development, Personal Thoughts, Offline Adventures' },
      ]}
    />
    <Header />
    <Content>{children()}</Content>
    <Footer />
  </HomeContainer>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

TemplateWrapper.defaultProps = {
  children: function renderChildren() {},
};

export default TemplateWrapper;
