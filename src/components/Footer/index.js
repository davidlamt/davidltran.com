import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background: #fff;
  margin-top: 1.45rem;
  flex-shrink: 0;
`;

const FooterContainer = styled.div`
  margin: 0 auto;
  color: #aaa;
  font-size: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MainNavigation = styled.nav`
  ul {
    margin-left: 1px;
    list-style: none;
    display: flex;
    flex-direction: row;

    li {
      margin-right: 15px;
      padding-right: 15px;
      border-right: 1px solid #aaa;

      :last-child {
        border-right: none;
      }

      a {
        text-decoration: none;
        color: #aaa;

        :active,
        :hover {
          color: #333;
          border-bottom: 1px solid #333;
        }
      }
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <p>Copyright © 2017 - {new Date().getFullYear()} David Tran</p>
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
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
