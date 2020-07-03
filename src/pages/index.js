import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

export default function IndexPage({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Tonyz's Blog</h1>
      <p>On this blog I write mostly about tech related topics to better understand them.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="Something"/>
      <h4>{data.allMdx.totalCount} Posts</h4>
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
                  to={node.fields.slug}
                >
              <h3>
                {node.frontmatter.title}{" "}
                <span>
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}

      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export const query = graphql`
  query{
    allMdx {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "DD-MM-YYYY")
            title
          }
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`

