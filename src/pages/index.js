import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Tonyz's Blog</h1>
    <p>On this blog I write mostly about tech related topics to better understand them.</p>
    <ul>
      <li><Link to="/2020/06-24--ssh">SSH</Link></li>
      <li><Link to="/2020/06-25--cookies-sessions-local-storage">Cookies vs. Sessions vs. Local Storage</Link></li>
      <li><Link to="/2020/06-26--ssl-tls">SSL/TLS</Link></li>
    </ul>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
