import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PostListing from '../PostListing';

const PostList = styled.ul`
  margin: 0;
  list-style: none;
`;

const SearchContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 2rem;
  max-width: 500px;
  position: relative;
`;

const SearchInput = styled.input`
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  outline: none;
  padding: 5px 50px 5px 10px;
  width: 100%;

  &:focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`;

const PostCount = styled.span`
  color: #d3d3d3;
  position: absolute;
  right: 10px;
`;

const Posts = ({ numberOfPostsToShow, searchable }) => {
  const data = useStaticQuery(
    graphql`
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
                date(formatString: "MMMM DD, YYYY")
                tags
              }
            }
          }
        }
      }
    `
  );
  const posts = data.allMarkdownRemark.edges;
  const [searchInput, setSearchInput] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const postsToDisplay = filteredPosts.slice(0, numberOfPostsToShow);

  const handleInputChange = event => {
    const searchInput = event.target.value.toLowerCase();

    const validPosts = posts.filter(({ node: post }) => {
      const { tags, title } = post.frontmatter;

      return (
        title.toLowerCase().includes(searchInput) ||
        tags.join(' ').includes(searchInput)
      );
    });

    setSearchInput(searchInput);
    setFilteredPosts(validPosts);
  };

  return (
    <React.Fragment>
      {searchable && (
        <SearchContainer>
          <SearchInput
            onChange={handleInputChange}
            placeholder="Search posts"
            value={searchInput}
          />
          <PostCount>{postsToDisplay.length}</PostCount>
        </SearchContainer>
      )}
      <PostList>
        {postsToDisplay.map(({ node: post }) => {
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
        })}
      </PostList>
    </React.Fragment>
  );
};

Posts.propTypes = {
  numberOfPostsToShow: PropTypes.number,
  searchable: PropTypes.bool,
};

Posts.defaultProps = {
  numberOfPostsToShow: Infinity,
  searchable: false,
};

export default Posts;
