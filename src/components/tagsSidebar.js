import React from "react"
// import PropTypes from "prop-types"
// import Layout from "../components/layout"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
// import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

const TagsSidebar = ({data}) => (
  <aside>
    <div>
      <h3>Tags</h3>
      <ul>
        {
          console.log(data)
        }
      </ul>
    </div>
  </aside>
)

// {group.map(tag => (
//           <li key={tag.fieldValue}>
//             <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
//               {tag.fieldValue} ({tag.totalCount})
//             </Link>
//           </li>
//         ))}

// TagsSidebar.propTypes = {
//   data: PropTypes.shape({
//     allMdx: PropTypes.shape({
//       group: PropTypes.arrayOf(
//         PropTypes.shape({
//           fieldValue: PropTypes.string.isRequired,
//           totalCount: PropTypes.number.isRequired,
//         }).isRequired
//       ),
//     }),
//     site: PropTypes.shape({
//       siteMetadata: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//       }),
//     }),
//   }),
// }

export default TagsSidebar

export const queryTags = graphql`
  query {
    allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`