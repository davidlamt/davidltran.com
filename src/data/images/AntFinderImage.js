import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import ProjectImage from './ProjectImage';

const AntFinderImage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/antfinder.png" }) {
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
      alt="Screenshot of the AntFinder application"
    />
  );
};

export default AntFinderImage;
