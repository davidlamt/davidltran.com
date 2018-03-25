import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PostListing from '../PostListing';

const PostsSection = styled.div`
  margin-bottom: 2rem;

  span.header {
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 1.1;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
    text-rendering: optimizeLegibility;
    color: #0984e3;

    a {
      color: inherit;
      border-bottom: none;
    }
  }

  ul {
    margin: 20px 0 0 0;
    list-style: none;
  }
`;

const Posts = ({ posts }) => (
  <PostsSection>
    <span className="header">
      <Link to="/archives">Writing</Link>
    </span>
    <ul>
      {posts.map(({ node: post }) => (
        <PostListing key={post.id} title={post.frontmatter.title} date={post.frontmatter.date} />
      ))}
    </ul>
  </PostsSection>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }),
      }),
    })
  ),
};

Posts.defaultProps = {
  posts: [
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
};

export default Posts;
