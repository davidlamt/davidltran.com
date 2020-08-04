import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PostListing from '../PostListing';

const PostList = styled.ul`
  margin: 0;
  list-style: none;
`;

const SearchInput = styled.input`
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  max-width: 500px;
  outline: none;
  padding: 5px 10px;
  width: 100%;

  &:focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`;

const Posts = ({ numberOfPostsToShow, searchable }) => {
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
        let searchFragment;

        if (searchable) {
          searchFragment = <SearchInput placeholder="Search posts" />;
        }

        return (
          <React.Fragment>
            {searchFragment}
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
          </React.Fragment>
        );
      }}
    />
  );
};

Posts.propTypes = {
  numberOfPostsToShow: PropTypes.number,
  searchable: PropTypes.bool,
};

Posts.defaultProps = {
  numberOfPostsToShow: null,
  searchable: false,
};

export default Posts;
