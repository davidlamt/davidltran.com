import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import CompanyLogo from './CompanyLogo';

const TigerConnectLogo = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/tigerconnect.png" }) {
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
      alt="TigerConnect Company Logo"
    />
  );
};

export default TigerConnectLogo;
