import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Tag } from './';

const ExperienceContainer = styled.div`
  border-left: 4px solid #d9dee7;
  padding: 0 2rem 2rem;
  position: relative;
`;

const DiamondSpinner = styled.div`
  background-color: #333;
  height: 30px;
  left: 0;
  margin-left: -17px;
  position: absolute;
  top: 0;
  transform: rotate(45deg);
  transition: transform 0.3s ease, background-color 0.3s ease;
  width: 30px;

  ${props =>
    props.isHovered &&
    css`
      background-color: #cee6f9;
      transform: rotate(-45deg);
    `}
`;

const DatesContainer = styled.p`
  background-color: #f5f5f5;
  border-radius: 5px;
  display: inline-block;
  font-size: 0.75em;
  font-weight: 500;
  padding: 5px;
`;

const CompanyContainer = styled.div`
  position: relative;
`;

const CompanyLogo = styled.img`
  height: 50px;
  position: absolute;
  right: 0;
  top: 0;
  transition: transform 0.3s ease;
  width: 50px;

  &:hover {
    transform: scale(1.3);
  }
`;

const Experience = ({
  companyLogo,
  companyLogoAlt,
  companyName,
  companyUrl,
  description,
  endDate,
  startDate,
  tags,
  title,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <ExperienceContainer
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <DiamondSpinner isHovered={isHovered} />
      <DatesContainer>
        {startDate} - {endDate}
      </DatesContainer>
      <CompanyContainer>
        <a href={companyUrl}>
          <CompanyLogo src={companyLogo} alt={companyLogoAlt} />
        </a>
        <h2>
          <a href={companyUrl}>{companyName}</a>
        </h2>
        <h3>{title}</h3>
        <p>{description}</p>
        {tags.map(tag => (
          <Tag tagName={tag} key={tag} />
        ))}
      </CompanyContainer>
    </ExperienceContainer>
  );
};

Experience.propTypes = {
  companyLogo: PropTypes.string.isRequired,
  companyLogoAlt: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  companyUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Experience;
