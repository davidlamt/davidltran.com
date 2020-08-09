import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  padding-top: 3.45rem;
`;

const HeaderName = styled(Link)`
  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.1;

  &:hover {
    text-decoration: none;
  }
`;

const MainNavigation = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-bottom: 0;
    margin-left: 1px;

    li {
      margin: 0 5px;

      @media (max-width: 450px) {
        margin: 0;
      }

      a {
        border-radius: 5px;
        color: #333;
        padding: 10px;
        transition: background-color 0.2s linear;

        &:hover {
          background-color: #f5f5f5;
          text-decoration: none;
        }
      }
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <HeaderName to="/">David Tran</HeaderName>
    <MainNavigation>
      <ul>
        <li>
          <Link to="/archives">Writing</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
      </ul>
    </MainNavigation>
  </HeaderContainer>
);

export default Header;
