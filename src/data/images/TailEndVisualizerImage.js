import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import ProjectImage from './ProjectImage';

const TailEndVisualizerImage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/tail-end-visualizer.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <ProjectImage
      fluid={data.file.childImageSharp.fluid}
      alt="Screenshot of the Tail End Visualizer application"
    />
  );
};

export default TailEndVisualizerImage;
