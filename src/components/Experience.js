import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Experience = ({ title }) => {
  return <div>{title}</div>;
};

Experience.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  companyLogo: PropTypes.string.isRequired,
  companyUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Experience;
