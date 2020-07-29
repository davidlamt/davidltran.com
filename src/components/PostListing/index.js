import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Tag } from '../';

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
    text-decoration: none;
  }
`;

const PostTitle = styled.div`
  font-weight: 500;
`;

const PostDate = styled.div`
  font-size: 0.8em;
  margin-top: 5px;
`;

const PostListing = ({ slug, title, date, tags }) => (
  <PostListingContainer to={slug}>
    <PostTitle>{title}</PostTitle>
    <PostDate>{date}</PostDate>
    {tags.map(tag => (
      <Tag tagName={tag} key={tag} />
    ))}
  </PostListingContainer>
);

PostListing.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

PostListing.defaultProps = {
  slug: '/default/',
  title: 'Default Title',
  date: '1970-01-01',
  tags: ['Tag'],
};

export default PostListing;
