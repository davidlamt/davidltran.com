import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const IntroductionSection = styled.div`
  margin-bottom: 3rem;

  .svg {
    box-shadow: none;
    border-bottom: none;

    :active,
    :hover {
      background: none;
      fill: #0984e3;
    }
  }
`;

const Introduction = () => (
  <IntroductionSection>
    <h1>👋 Hey there, I&#39;m David!</h1>

    <p>
      I am currently tackling interesting problems as a Senior Web Engineer at{' '}
      <a href="https://tigerconnect.com/">TigerConnect</a>, a company developing
      secure communication platforms for the healthcare industry.
    </p>

    <p>
      When I am not glued to a computer screen, you can find me enjoying food,
      exercising, reading, and traveling. I am a{' '}
      <a href="https://til.davidltran.com">lifelong learner</a>, an avid{' '}
      <Link to="/blog/podcasts-to-listen-to-in-2018/">podcast listener</Link>,
      and an enthusiast of books of all genres.
    </p>

    <p>My current weapons of choice include JavaScript, React, and Gatsby.</p>

    <p>All thoughts and opinions expressed are my own.</p>
  </IntroductionSection>
);

export default Introduction;
