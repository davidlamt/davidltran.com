import React from 'react';

import Layout from '../components/Layout';
import Experience from '../components/Experience';

import experienceTimeline from '../data/experienceTimeline';

const ExperiencePage = () => (
  <Layout>
    <h1>Experience</h1>
    <p>
      For more details, check out my{' '}
      <a href="https://www.linkedin.com/in/davidlamt/">LinkedIn</a>.
    </p>
    {experienceTimeline.map(experience => (
      <Experience key={experience.companyName} {...experience} />
    ))}
  </Layout>
);

export default ExperiencePage;
