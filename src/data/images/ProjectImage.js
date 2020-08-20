import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Image = styled(Img)`
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 20px 0;
`;

const ProjectImage = ({ alt, fluid }) => {
  return <Image fluid={fluid} alt={alt} />;
};

ProjectImage.propTypes = {
  alt: PropTypes.string.isRequired,
  fluid: PropTypes.object.isRequired,
};

export default ProjectImage;
