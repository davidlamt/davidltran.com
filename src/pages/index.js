import React from 'react';
import PropTypes from 'prop-types';

import Introduction from '../components/Introduction';
import Projects from '../components/Projects';
import Posts from '../components/Posts';

const IndexPage = ({ data }) => (
  <div>
    <Introduction />
    <Posts posts={data.allMarkdownRemark.edges} />
    <Projects />
  </div>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
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
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
