import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PostListing from '../PostListing';

const TagPage = styled.div`
  ul {
    list-style: none;
    margin: 0;
  }
`;

export default class Tag extends Component {
  static propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              id: PropTypes.string,
              fields: PropTypes.shape({
                slug: PropTypes.string,
              }),
              frontmatter: PropTypes.shape({
                title: PropTypes.string,
                date: PropTypes.string,
              }),
            }),
          })
        ),
      }),
    }),
    pathContext: PropTypes.shape({
      tag: PropTypes.string,
    }),
  };

  static defaultProps = {
    data: {
      allMarkdownRemark: {
        edges: [
          {
            node: {
              id: 'Default',
              fields: {
                slug: '/default/',
              },
              frontmatter: {
                title: 'Default Title',
                date: '1970-01-01',
              },
            },
          },
        ],
      },
    },
    pathContext: {
      tag: 'default',
    },
  };

  capitalize = tag =>
    tag
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');

  render() {
    const { data } = this.props;

    return (
      <TagPage>
        <h1>{this.capitalize(this.props.pathContext.tag)}</h1>
        <ul>
          {data.allMarkdownRemark.edges.map(({ node: post }) => (
            <PostListing
              key={post.id}
              slug={post.fields.slug}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
            />
          ))}
        </ul>
      </TagPage>
    );
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
