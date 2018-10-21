import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const WarningContainer = styled.div`
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

const NotFoundPage = () => (
  <WarningContainer>
    <h1>Page Not Found</h1>
    <p>Looks like you have followed a broken link or entered a URL that does not exist on this site.</p>
    <Link to="/">Take me back to the home page.</Link>
  </WarningContainer>
);

export default NotFoundPage;
