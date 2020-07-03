import { Link } from "gatsby"
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
      </ul>
    </nav>
)

export default Nav
