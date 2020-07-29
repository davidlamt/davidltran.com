import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.div`
  ul {
    margin: 20px 0 0 0;
    list-style: none;
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
