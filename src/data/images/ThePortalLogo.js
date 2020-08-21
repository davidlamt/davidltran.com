import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import CompanyLogo from './CompanyLogo';

const ThePortalLogo = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/the-portal.png" }) {
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
      alt="The Portal Company Logo"
    />
  );
};

export default ThePortalLogo;
