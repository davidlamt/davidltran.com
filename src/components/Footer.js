import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  color: #aaa;
  font-size: 80%;
  margin: 1.45rem 0;
`;

const EmailInstruction = styled.div`
  margin-bottom: 0.5rem;
  min-height: 22px;
  text-align: right;

  @media (max-width: 511px) {
    text-align: left;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
`;

const MainNavigation = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-left: 1px;

    li {
      &:not(:last-child) {
        border-right: 1px solid #aaa;
        margin-right: 15px;
        padding-right: 15px;
      }

      a {
        color: #aaa;
        cursor: pointer;
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

const EMAIL = 'davidlamt@gmail.com';
const COPIED_TEXT = `${EMAIL} copied to clipboard`;
const COPIED_TIMEOUT = 3000;

const Footer = () => {
  const [emailInstruction, setEmailInstruction] = useState('');

  const showEmailInstruction = () => {
    if (emailInstruction === COPIED_TEXT) return;

    setEmailInstruction(`Click to copy ${EMAIL}`);
  };

  const hideEmailInstruction = () => {
    if (emailInstruction === COPIED_TEXT) return;

    setEmailInstruction('');
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(EMAIL);
    setEmailInstruction(COPIED_TEXT);
  };

  useEffect(() => {
    if (emailInstruction === COPIED_TEXT) {
      setTimeout(() => setEmailInstruction(''), COPIED_TIMEOUT);
    }
  }, [emailInstruction]);

  return (
    <FooterContainer>
      <EmailInstruction>{emailInstruction}</EmailInstruction>
      <InfoContainer>
        <p>Copyright © 2017 - {new Date().getFullYear()} David Tran</p>
        <MainNavigation>
          <ul>
            <li>
              <a
                onClick={copyEmailToClipboard}
                onMouseOut={hideEmailInstruction}
                onMouseOver={showEmailInstruction}
              >
                Email
              </a>
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
      </InfoContainer>
    </FooterContainer>
  );
};

export default Footer;
