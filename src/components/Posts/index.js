import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PostListing from '../PostListing';

const PostList = styled.ul`
  margin: 0;
  list-style: none;
`;

const Posts = ({ numberOfPostsToShow }) => {
  return (
    <StaticQuery
      query={graphql`
        query PostsQuery {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  date(formatString: "MMMM DD, YYYY")
                  tags
                }
              }
            }
          }
        }
      `}
      render={data => {
        const posts = data.allMarkdownRemark.edges;

        return (
          <PostList>
            {posts.map(({ node: post }, index) => {
              if (!numberOfPostsToShow || index < numberOfPostsToShow) {
                return (
                  <li key={post.id}>
                    <PostListing
                      slug={post.fields.slug}
                      title={post.frontmatter.title}
                      date={post.frontmatter.date}
                      tags={post.frontmatter.tags}
                    />
                  </li>
                );
              }

              return null;
            })}
          </PostList>
        );
      }}
    />
  );
};

Posts.propTypes = {
  numberOfPostsToShow: PropTypes.number,
};

Posts.defaultProps = {
  numberOfPostsToShow: null,
};

export default Posts;
