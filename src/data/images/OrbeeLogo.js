import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import CompanyLogo from './CompanyLogo';

const OrbeeLogo = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/orbee.png" }) {
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
      alt="Orbee Company Logo"
    />
  );
};

export default OrbeeLogo;
