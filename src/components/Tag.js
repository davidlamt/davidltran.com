import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const defaultBackgroundColor = '#2d4455';
const defaultForegroundColor = '#fff';

const tagBackgroundColor = {
  development: '#fff3e5',
  thoughts: '#d1d1d1',
};

const tagForegroundColor = {
  development: '#333',
  thoughts: '#333',
};

const TagLabel = styled.span`
  background-color: ${props =>
    tagBackgroundColor[props.tagName] || defaultBackgroundColor};
  border-radius: 5px;
  color: ${props =>
    tagForegroundColor[props.tagName] || defaultForegroundColor};
  display: inline-block;
  font-size: 0.8em;
  margin-top: 8px;
  padding: 3px 5px;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

const Tag = ({ tagName }) => <TagLabel tagName={tagName}>{tagName}</TagLabel>;

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
};

export default Tag;
