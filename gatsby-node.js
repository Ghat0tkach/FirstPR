// gatsby-node.js

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "readme" } }) {
        edges {
          node {
            name
          }
        }
      }
    }
  `);

  result.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: `/users/${node.name}`,
      component: path.resolve('./src/pages/index.js'), // Create a template for user READMEs
      context: {
        username: node.name,
      },
    });
  });
};