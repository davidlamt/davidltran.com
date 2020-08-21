import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Image = styled(Img)`
  height: 50px;
  transition: transform 0.3s ease;
  width: 50px;

  &:hover {
    transform: scale(1.3);
  }
`;

const CompanyLogo = ({ alt, fluid }) => {
  return <Image fluid={fluid} alt={alt} />;
};

CompanyLogo.propTypes = {
  alt: PropTypes.string.isRequired,
  fluid: PropTypes.object.isRequired,
};

export default CompanyLogo;
