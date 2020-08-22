import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import Layout from './Layout';
import { Tag } from './';

const BASE_REPO_URL =
  'https://github.com/davidlamt/davidtranscend-com-gatsby/blob/master/src/posts';

const PostContainer = styled.div`
  a.gatsby-resp-image-link {
    border-bottom: none;
  }
`;

const PostMeta = styled.div`
  margin-bottom: 1.5rem;
`;

const PublishInfo = styled.div`
  background-color: #384858;
  border-bottom-right-radius: 25px;
  border-top-right-radius: 25px;
  color: #fff;
  display: inline-block;
  margin-bottom: 0.5rem;
  margin-left: -60px;
  padding-left: 60px;
  padding-right: 20px;
`;

const PostMarkdown = styled.div`
  code:before,
  code:after,
  tt:before,
  tt:after {
    content: none;
  }
`;

export default class Post extends Component {
  static propTypes = {
    data: PropTypes.shape({
      mdx: PropTypes.shape({
        fileAbsolutePath: PropTypes.string,
        frontmatter: PropTypes.shape({
          date: PropTypes.string,
          tags: PropTypes.arrayOf(PropTypes.string),
          title: PropTypes.string,
        }),
        body: PropTypes.string,
      }),
    }),
  };

  static defaultProps = {
    data: {
      mdx: {
        fileAbsolutePath: 'post/index.md',
        frontmatter: {
          date: '1970-01-01',
          tags: ['tag'],
          title: 'Default Title',
        },
        body: '<p>Default HTML</p>',
      },
    },
  };

  render() {
    const { data } = this.props;
    const { date, tags, title } = data.mdx.frontmatter;
    const fileRelativePath = data.mdx.fileAbsolutePath
      .split('/')
      .slice(-2)
      .join('/');
    const fileURL = `${BASE_REPO_URL}/${fileRelativePath}`;

    return (
      <Layout>
        <PostContainer>
          <h1>{title}</h1>
          <PostMeta>
            <PublishInfo>Published on {date}</PublishInfo>
            <div>
              {tags.map(tag => (
                <Tag tagName={tag} key={tag} />
              ))}
            </div>
          </PostMeta>
          <PostMarkdown>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </PostMarkdown>
          <em>
            Noticed a mistake in this post? Feel free to{' '}
            <a href={fileURL}>submit a pull request</a>!
          </em>
        </PostContainer>
      </Layout>
    );
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      fileAbsolutePath
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
      body
    }
  }
`;
