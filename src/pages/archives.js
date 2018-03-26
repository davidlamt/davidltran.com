import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';

import PostListing from '../components/PostListing';

const ArchivesPage = styled.div`
  ul {
    list-style: none;
    margin: 0;
  }
`;

export default class Archives extends Component {
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
  };

  render() {
    const { data } = this.props;

    const groups = _.groupBy(data.allMarkdownRemark.edges, ({ node }) => new Date(node.frontmatter.date).getFullYear());
    const years = Object.keys(groups).sort((a, b) => b - a);

    return (
      <ArchivesPage>
        <h1>Archives</h1>
        {_.map(years, year => (
          <div key={year}>
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
      </ArchivesPage>
    );
  }
}

export const query = graphql`
  query ArchivesQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
