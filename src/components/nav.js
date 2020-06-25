import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Nav = ({ navTitles }) => (
    <nav
      style={{
          display: `flex`,
          justifyContent: `flex-end`,
          alignItems: `flex-end`
        }}
    >
      <ul
        style={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          margin: `0`
        }}
      >
        <Link to="/" style={{color: `#fff`, paddingLeft: `1rem`}}>Home</Link>
        <Link to="/contact" style={{color: `#fff`, paddingLeft: `1rem`}}>Contact</Link>
        <Link to="/page-2" style={{color: `#fff`, paddingLeft: `1rem`}}>Page 2</Link>
      </ul>
    </nav>
)

export default Nav
