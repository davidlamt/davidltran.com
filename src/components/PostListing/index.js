import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PostListingContainer = styled.li`
  span {
    color: #aaa;
    margin-right: 1rem;
  }
`;

const PostListing = ({ slug, title, date }) => (
  <PostListingContainer>
    <span>{date}</span>
    <Link to={slug}>{title}</Link>
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
