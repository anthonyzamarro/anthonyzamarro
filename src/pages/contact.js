import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function Contact({data}) {
	console.log(data)
	return (
		<Layout>
			<h1>I'd love to talk! Email me at the address below</h1>
			<p>
				<a href="mailto:anthony.zamarro@gmail.com">anthony.zamarro@gmail.com</a>
			</p>
		</Layout>
	)
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
