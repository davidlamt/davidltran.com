import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PostListingContainer = styled(Link)`
  border-radius: 5px;
    color: #333;
  display: block;
  margin-left: -10px;
  padding: 10px;
    text-decoration: none;
  transition: background-color 0.2s linear;
  width: 100%;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const PostTitle = styled.div`
  font-weight: 500;
`;

const PostDate = styled.div`
  font-size: 0.9em;
`;

const PostListing = ({ slug, title, date }) => (
  <PostListingContainer to={slug}>
    <PostTitle>{title}</PostTitle>
    <PostDate>{date}</PostDate>
  </PostListingContainer>
);

PostListing.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
};

PostListing.defaultProps = {
  slug: '/default/',
  title: 'Default Title',
  date: '1970-01-01',
};

export default PostListing;
