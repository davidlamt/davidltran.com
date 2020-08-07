import React from 'react';

import Layout from '../../components/Layout';
import { Project } from '../../components';

import { projectsData } from '.';

const Projects = () => (
  <Layout>
    <h1>Projects</h1>
    {projectsData.map(project => (
      <Project key={project.title} project={project} />
    ))}
  </Layout>
);

export default Projects;
