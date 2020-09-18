import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeToggle } from './';

const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  padding-top: 3.45rem;
`;

const HeaderName = styled(Link)`
  color: var(--color-text);
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
        color: var(--color-text);
        padding: 10px;
        transition: background-color 0.2s linear;

        &:hover {
          background-color: var(--color-item-hover);
          text-decoration: none;
        }
      }
    }
  }
`;

const ActiveLinkStyle = {
  backgroundColor: 'var(--color-item-hover)',
};

const NavLink = ({ children, to }) => (
  <Link to={to} activeStyle={ActiveLinkStyle} partiallyActive>
    {children}
  </Link>
);

NavLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderName to="/">David Tran</HeaderName>
      <MainNavigation>
        <ul>
          <li>
            <NavLink to="/archives">Writing</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/experience">Experience</NavLink>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </MainNavigation>
    </HeaderContainer>
  );
};

export default Header;
