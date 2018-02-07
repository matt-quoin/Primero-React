import React from 'react'
import { NavLink } from 'react-router-dom'

const MainNavItem = ({ page, children }) => (
  <NavLink
    to={page === '/' ? '/' : `/${ page }`}
    activeStyle={ {
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </NavLink>
)

export default MainNavItem