import React from 'react';

import Layout from '../components/Layout';

import Introduction from '../components/Introduction';
import Posts from '../components/Posts';

const IndexPage = () => (
  <Layout>
    <Introduction />
    <h2>Recent Writings</h2>
    <Posts numberOfPostsToShow={5} />
  </Layout>
);

export default IndexPage;
