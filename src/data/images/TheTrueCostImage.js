import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import ProjectImage from './ProjectImage';

const TheTrueCostImage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/the-true-cost.png" }) {
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
      alt="Screenshot of The True Cost application'"
    />
  );
};

export default TheTrueCostImage;
