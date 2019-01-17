import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PostListingContainer = styled.li`
  span {
    color: #aaa;
    margin-right: 1rem;
  }

  a {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 0px 0px #cee6f9;
    color: #333;
    text-decoration: none;
    border-bottom: 1px solid #cee6f9;
    padding-top: 2px;

    :active,
    :hover {
      background: #cee6f9;
    }
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
