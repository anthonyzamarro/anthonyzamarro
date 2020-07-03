import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.mdx
  console.log(post);
  const shortcodes = { Link }
  return (
    <Layout>
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
	    }
	}
`