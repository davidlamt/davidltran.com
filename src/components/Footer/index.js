import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  color: #aaa;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  font-size: 80%;
  justify-content: space-between;
  margin: 1.45rem 0;
`;

const MainNavigation = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-left: 1px;

    li {
      border-right: 1px solid #aaa;
      margin-bottom: 0;
      margin-right: 15px;
      padding-right: 15px;

      :last-child {
        border-right: none;
      }

      a {
        color: #aaa;
        text-decoration: none;

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
  <FooterContainer>
    <p>Copyright © 2017 - {new Date().getFullYear()} David Tran</p>
    <MainNavigation>
      <ul>
        <li>
          <a href="mailto:davidlamt@gmail.com">Email</a>
        </li>
        <li>
          <a href="https://github.com/davidlamt">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/davidlamt/">LinkedIn</a>
        </li>
        <li>
          <Link to="/uses">Uses</Link>
        </li>
      </ul>
    </MainNavigation>
  </FooterContainer>
);

export default Footer;
