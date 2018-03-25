import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background: #fff;
  margin: 2rem 0 1.45rem 0;
  flex-shrink: 0;
`;

const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 40rem;
  padding: 1.45rem 1.0875rem 0 1.0875rem;
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

      &:last-child {
        border-right: none;
      }

      a {
        text-decoration: none;
        color: #0984e3;
        border-bottom: none;

        &:hover {
          border-bottom: 1px solid #0984e3;
        }
      }
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <p>Copyright 2017 - 2018 David Tran</p>
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
