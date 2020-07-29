import React from 'react';

import Layout from '../components/Layout';

import Introduction from '../components/Introduction';
import Projects from '../components/Projects';
import Posts from '../components/Posts';

const IndexPage = () => (
  <Layout>
    <Introduction />
    <h2>Recent Writings</h2>
    <Posts numberOfPostsToShow={5} />
    <h2>Projects</h2>
    <Projects />
  </Layout>
);

export default IndexPage;
