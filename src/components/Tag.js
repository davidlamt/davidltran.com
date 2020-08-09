import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const defaultBackgroundColor = '#2d4455';
const defaultForegroundColor = '#fff';

const tagBackgroundColor = {
  'c#': '#30058d',
  'development environment': '#89cce6',
  'react native': '#61dafb',
  'styled components': '#ffa1e4',
  angular: '#dd1b16',
  bits: '#fff3e5',
  business: '#03a955',
  c: '#a8bbcc',
  eslint: '#3f31bf',
  experiences: '#02837e',
  express: '#444444',
  gatsby: '#663399',
  git: '#f44d27',
  http: '#005c99',
  hugo: '#ff4088',
  java: '#4c84a1',
  javascript: '#f0db4f',
  jquery: '#006aaa',
  macos: '#033a7d',
  mobx: '#df5d17',
  mongodb: '#13aa52',
  netlify: '#00aea0',
  node: '#68a168',
  podcasts: '#d4ad36',
  prettier: '#f8bc45',
  react: '#61dafb',
  redux: '#764abc',
  regex: '#57b8e3',
  scripting: '#9acf59',
  testing: '#0366ff',
  thoughts: '#faceb3',
  tmux: '#11ba3a',
  travels: '#fda3bd',
  typescript: '#0074c1',
  uwp: '#b893c6',
  vim: '#007f00',
  vscode: '#00a6ec',
  wpf: '#5a4296',

  // Next: #b1aed9
};

const tagForegroundColor = {
  'c#': '#fff',
  'development environment': '#333',
  'react native': '#333',
  'styled components': '#333',
  angular: '#fff',
  bits: '#333',
  business: '#fff',
  c: '#333',
  eslint: '#fff',
  experiences: '#fff',
  express: '#fff',
  gatsby: '#fff',
  git: '#fff',
  http: '#fff',
  hugo: '#fff',
  java: '#fff',
  javascript: '#333',
  jquery: '#fff',
  macos: '#fff',
  mobx: '#fff',
  mongodb: '#fff',
  netlify: '#fff',
  node: '#fff',
  podcasts: '#333',
  prettier: '#333',
  react: '#333',
  redux: '#fff',
  regex: '#fff',
  scripting: '#333',
  testing: '#fff',
  thoughts: '#333',
  tmux: '#fff',
  travels: '#333',
  typescript: '#fff',
  uwp: '#333',
  vim: '#fff',
  vscode: '#fff',
  wpf: '#fff',
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
