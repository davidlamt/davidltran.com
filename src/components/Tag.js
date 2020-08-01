import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const defaultBackgroundColor = '#2d4455';
const defaultForegroundColor = '#fff';

const tagBackgroundColor = {
  bits: '#fff3e5',
  javascript: '#f0db4f',
  thoughts: '#faceb3',
  podcasts: '#d4ad36',
  'development environment': '#89cce6',
  git: '#f44d27',
  c: '#a8bbcc',
  vim: '#007f00',
  http: '#005c99',
  travels: '#fda3bd',
  java: '#4c84a1',
  'c#': '#30058d',
  hugo: '#ff4088',
  scripting: '#9acf59',
  business: '#03a955',
  experiences: '#02837e',
  gatsby: '#663399',
  netlify: '#00aea0',
  'styled components': '#ffa1e4',
  eslint: '#3f31bf',
  prettier: '#f8bc45',
  vscode: '#00a6ec',
  react: '#61dafb',
  'react native': '#61dafb',
};

const tagForegroundColor = {
  bits: '#333',
  git: '#fff',
  javascript: '#333',
  thoughts: '#333',
  podcasts: '#333',
  'development environment': '#333',
  c: '#333',
  vim: '#fff',
  http: '#fff',
  travels: '#333',
  java: '#fff',
  'c#': '#fff',
  hugo: '#fff',
  scripting: '#333',
  business: '#fff',
  experiences: '#fff',
  gatsby: '#fff',
  netlify: '#fff',
  'styled components': '#333',
  eslint: '#fff',
  prettier: '#333',
  vscode: '#fff',
  react: '#333',
  'react native': '#333',
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
