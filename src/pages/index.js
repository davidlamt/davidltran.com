import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';

import Introduction from '../components/Introduction';
import Projects from '../components/Projects';
import Posts from '../components/Posts';

const IndexPage = ({ data }) => (
  <Layout>
    <Introduction />
    <Posts numberOfPostsToShow={5} posts={data.allMarkdownRemark.edges} />
    <Projects />
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            fields: PropTypes.shape({
              slug: PropTypes.string,
            }),
            frontmatter: PropTypes.shape({
              title: PropTypes.string,
              date: PropTypes.string,
            }),
          }),
        })
      ),
    }),
  }),
};

IndexPage.defaultProps = {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: 'Default',
            fields: {
              slug: '/default/',
            },
            frontmatter: {
              title: 'Default Title',
              date: '1970-01-01',
            },
          },
        },
      ],
    },
  },
};

export default IndexPage;

export const query = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
