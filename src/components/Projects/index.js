import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.div`
  span {
    line-height: 1.1;
    font-weight: bold;
    font-size: 2.25rem;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
    text-rendering: optimizeLegibility;
    color: #0984e3;

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  ul {
    margin: 20px 0 0 0;
    list-style: none;

    a {
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 2px 0px 0px #cee6f9;
      color: #333;
      text-decoration: none;
      border-bottom: 1px solid #cee6f9;
      padding-top: 2px;

      :active,
      :hover {
        background: #cee6f9;
      }
    }
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
