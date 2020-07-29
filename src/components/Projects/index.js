import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.div`
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
    <ul>
      <li>
        <a href="https://antfinder.herokuapp.com/">AntFinder</a>: An organized
        marketplace for UCI students to advertise and purchase various goods.
      </li>
    </ul>
  </ProjectsSection>
);

export default Projects;
