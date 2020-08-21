import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import CompanyLogo from './CompanyLogo';

const IDTECHLogo = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/id-tech.png" }) {
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
    <CompanyLogo
      fluid={data.file.childImageSharp.fluid}
      alt="ID TECH Company Logo"
    />
  );
};

export default IDTECHLogo;
