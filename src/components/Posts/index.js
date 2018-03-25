import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const PostsSection = styled.div`
  margin-bottom: 2rem;

  span {
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

const Posts = () => (
  <PostsSection>
    <span>
      <Link to="/archives">Writing</Link>
    </span>
    <ul>
      <li>
        <a href="https://antfinder.herokuapp.com/">AntFinder</a>
      </li>
      <li>
        <a href="https://antfinder.herokuapp.com/">AntFinder</a>
      </li>
      <li>
        <a href="https://antfinder.herokuapp.com/">AntFinder</a>
      </li>
      <li>
        <a href="https://antfinder.herokuapp.com/">AntFinder</a>
      </li>
    </ul>
  </PostsSection>
);

export default Posts;
