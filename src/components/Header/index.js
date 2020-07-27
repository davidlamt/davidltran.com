import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: #fff;
  margin-top: 2rem;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  padding-top: 1.45rem;

  span {
    margin: 0;
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 1.1;
    padding: 0;

    a {
      color: #333;
      text-decoration: none;
    }
  }
`;

const MainNavigation = styled.nav`
  margin-top: 1rem;

  ul {
    margin-left: 1px;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    li {
      margin-right: 15px;
      padding-right: 15px;
      border-right: 1px dotted #0984e3;

      :last-child {
        border-right: none;
      }

      a {
        color: #0984e3;
        text-decoration: none;

        :active,
        :hover {
          border-bottom: 1px solid #0984e3;
        }
      }
    }
  }
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <span>
        <Link to="/">David Tran</Link>
      </span>
      <MainNavigation>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/archives">Writing</Link>
          </li>
          <li>
            <a href="https://github.com/davidlamt">Projects</a>
          </li>
        </ul>
      </MainNavigation>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
