import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';

import Introduction from '../components/Introduction';
import Projects from '../components/Projects';
import Posts from '../components/Posts';

const SectionHeader = styled.div`
  margin-bottom: 1rem;
  line-height: 1.1;
  font-weight: bold;
  font-size: 2.25rem;
  color: #0984e3;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const IndexPage = () => (
  <Layout>
    <Introduction />
    <SectionHeader>
      <Link to="/archives">Writing</Link>
    </SectionHeader>
    <Posts numberOfPostsToShow={5} />
    <Projects />
  </Layout>
);

export default IndexPage;
