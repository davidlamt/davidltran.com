import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: #fff;
  margin: 2rem 0 1.45rem 0;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;

  h1 {
    margin: 0;

    a {
      color: #333;
      text-decoration: none;
    }
  }
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1>
        <Link to="/">David Tran</Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
