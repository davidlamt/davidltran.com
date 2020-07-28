import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PostListing from '../PostListing';

const PostsSection = styled.div`
  margin-bottom: 2rem;

  span.header {
    line-height: 1.1;
    font-weight: bold;
    font-size: 2.25rem;
    color: #0984e3;

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  ul {
    margin: 20px 0 0 0;
    list-style: none;
  }
`;

const Posts = ({ posts, numberOfPostsToShow }) => (
  <PostsSection>
    <span className="header">
      <Link to="/archives">Writing</Link>
    </span>
    <ul>
      {posts.map(({ node: post }, index) => {
        if (index < numberOfPostsToShow) {
          return (
            <PostListing
              key={post.id}
              slug={post.fields.slug}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              tags={post.frontmatter.tags}
            />
          );
        }

        return null;
      })}
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
          tags: PropTypes.arrayOf(PropTypes.string),
        }),
      }),
    })
  ),
  numberOfPostsToShow: PropTypes.number,
};

Posts.defaultProps = {
  posts: [
    {
      node: {
        id: 'Default',
        frontmatter: {
          title: 'Default Title',
          date: '1970-01-01',
          tags: ['Tag'],
        },
      },
    },
  ],
  numberOfPostsToShow: 5,
};

export default Posts;
