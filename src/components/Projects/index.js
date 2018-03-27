import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.div`
  span {
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 1.1;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
    text-rendering: optimizeLegibility;
    color: #0984e3;

    a {
      color: inherit;
      border-bottom: none;
    }
  }

  ul {
    margin: 20px 0 0 0;
    list-style: none;
  }
`;

const Projects = () => (
  <ProjectsSection>
    <span>
      <a href="https://github.com/davidlamt">Projects</a>
    </span>
    <ul>
      <li>
        <a href="https://antfinder.herokuapp.com/">AntFinder</a>: An organized marketplace for UCI students to advertise
        and purchase various goods.
      </li>
    </ul>
  </ProjectsSection>
);

export default Projects;
