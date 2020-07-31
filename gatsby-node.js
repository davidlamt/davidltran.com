const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const _ = require('lodash');

exports.onCreateNode = ({ actions, getNode, node }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'posts',
    });

    createNodeField({
      node,
      name: 'slug',
      value: `/blog${slug}`,
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('./src/components/Post.js');
  const tagTemplate = path.resolve('./src/components/Tag/index.js');

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors);
      }

      const posts = result.data.allMarkdownRemark.edges;

      // Create post detail pages
      posts.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: postTemplate,
          context: {
            slug: node.fields.slug,
          },
        });
      });

      // Tag pages
      let tags = [];
      _.each(posts, edge => {
        if (_.get(edge, 'node.frontmatter.tags')) {
          tags = tags.concat(edge.node.frontmatter.tags);
        }
      });

      // Eliminate duplicate tags
      tags = _.uniq(tags);

      // Create tag pages
      tags.forEach(tag => {
        createPage({
          path: `tags/${_.kebabCase(tag)}`,
          component: tagTemplate,
          context: {
            tag,
          },
        });
      });
    });

    resolve();
  });
};
