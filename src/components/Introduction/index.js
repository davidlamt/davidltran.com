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
    <p>Hi there, I&#39;m David.</p>

    <p>
      I am currently tackling interesting problems as a Web Developer at{' '}
      <a href="https://tigerconnect.com/">TigerConnect</a>, a company developing
      secure communication platforms for the healthcare industry.
    </p>

    <p>
      When I am not glued to a computer screen, you can find me enjoying food,
      exercising, reading, and traveling. I am a lifelong learner, an avid{' '}
      <Link to="/blog/podcasts-to-listen-to-in-2018/">podcast listener</Link>,
      and an enthusiast of books of all genres.
    </p>

    <p>My current weapons of choice include JavaScript, React, and Gatsby.</p>

    <p>All thoughts and opinions expressed are my own.</p>
  </IntroductionSection>
);

export default Introduction;
