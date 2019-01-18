import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';
import './index.css';

require('prismjs/themes/prism.css');

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 1.45rem;
  max-width: 40rem;
  height: 100%;
`;

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
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
    <Content>{children}</Content>
    <Footer />
  </HomeContainer>
);

TemplateWrapper.propTypes = {
  children: PropTypes.node,
};

TemplateWrapper.defaultProps = {
  children: <div />,
};

export default TemplateWrapper;
