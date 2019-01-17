import React, { Component } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import _ from 'lodash';
import PropTypes from 'prop-types';

import Layout from '../Layout';

import PostListing from '../PostListing';

const TagPage = styled.div`
  ul {
    list-style: none;
  }

  .group {
    margin-bottom: 3rem;
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
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');

  render() {
    const {
      data,
      pathContext: { tag },
    } = this.props;

    const groups = _.groupBy(data.allMarkdownRemark.edges, ({ node }) => new Date(node.frontmatter.date).getFullYear());
    const years = Object.keys(groups).sort((a, b) => b - a);

    return (
      <Layout>
        <TagPage>
          <h1>{this.capitalize(tag)}</h1>
          {_.map(years, year => (
            <div className="group" key={year}>
              <h2>{year}</h2>
              <ul>
                {groups[year].map(({ node: post }) => (
                  <PostListing
                    key={post.id}
                    slug={post.fields.slug}
                    title={post.frontmatter.title}
                    date={post.frontmatter.date}
                  />
                ))}
              </ul>
            </div>
          ))}
        </TagPage>
      </Layout>
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
          id
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
