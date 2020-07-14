/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require('lodash')


exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
  	const slug = createFilePath({node, getNode, basePath: 'posts' });
   	createNodeField({
   		node,
   		name: `slug`,
   		value: `/blog${slug}`
   	})
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const tagTemplate = path.resolve("src/templates/tags.js")
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
   const resultTags = await graphql(`
    {
      postsRemark: allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
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
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
  if (resultTags.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Extract tag data from query
  const tags = resultTags.data.tagsGroup.group;
  // Make tag pages
  tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    })



  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        id: node.id 
      },
    })
  })
}