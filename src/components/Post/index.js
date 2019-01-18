import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Layout from '../Layout';

const BASE_REPO_URL = 'https://github.com/davidlamt/davidtranscend-com-gatsby/blob/master/src/posts';

const PostContainer = styled.div`
  h1 {
    margin-bottom: 0.5rem;
  }

  a.gatsby-resp-image-link {
    border-bottom: none;
  }

  a:not(.gatsby-resp-image-link):not(.anchor) {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 0px 0px #cee6f9;
    color: #333;
    text-decoration: none;
    border-bottom: 1px solid #cee6f9;
    padding-top: 2px;

    :active,
    :hover {
      background: #cee6f9;
    }
  }
`;

const PostMeta = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: row;

  span.date {
    margin-right: 0.5rem;
    padding-right: 0.5rem;
    border-right: 1px solid #333;
  }

  svg {
    margin-top: 0.2rem;
    margin-right: 0.5rem;
  }

  ul {
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    li {
      margin: 0 0.5rem 0 0;
    }
  }
`;

const PostMarkdown = styled.div`
  code:before,
  code:after,
  tt:before,
  tt:after {
    content: none;
  }
`;

export default class PostPage extends Component {
  static propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        date: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.String),
        title: PropTypes.string,
      }),
      fileAbsolutePath: PropTypes.string,
      html: PropTypes.string,
    }),
  };

  static defaultProps = {
    data: {
      markdownRemark: {
        date: '1970-01-01',
        tags: ['default'],
        title: 'Default Title',
      },
      fileAbsolutePath: 'post/index.md',
      html: '<p>Default HTML</p>',
    },
  };

  generateTag = tag => (
    <li key={tag}>
      <Link to={`/tags/${tag}`}>#{tag}</Link>
    </li>
  );

  render() {
    const { data } = this.props;
    const fileRelativePath = data.markdownRemark.fileAbsolutePath
      .split('/')
      .slice(-2)
      .join('/');
    const fileURL = `${BASE_REPO_URL}/${fileRelativePath}`;

    return (
      <Layout>
        <PostContainer>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <PostMeta>
            <span className="date">{data.markdownRemark.frontmatter.date}</span>
            <svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M576 448q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm1067 576q0 53-37 90l-491 492q-39 37-91 37-53 0-90-37l-715-716q-38-37-64.5-101t-26.5-117v-416q0-52 38-90t90-38h416q53 0 117 26.5t102 64.5l715 714q37 39 37 91z" />
            </svg>
            <ul>{data.markdownRemark.frontmatter.tags.map(tag => this.generateTag(tag))}</ul>
          </PostMeta>
          <PostMarkdown
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html,
            }}
          />
          <em>
            Noticed a mistake in this post? Feel free to <a href={fileURL}>submit a pull request</a>!
          </em>
        </PostContainer>
      </Layout>
    );
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fileAbsolutePath
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
      html
    }
  }
`;
