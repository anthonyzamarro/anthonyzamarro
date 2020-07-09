import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
  const post = data.mdx,
        shortcodes = { Link }
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
	        <MDXRenderer>{post.body}</MDXRenderer>
	    </MDXProvider>
      </div>
    </Layout>
  )
}

export const query = graphql`
  	query($slug: String!) {
	    mdx(fields: { slug: { eq: $slug } }) {
	      frontmatter {
	        title
	      }
	      body
        excerpt
	    }
	}
`