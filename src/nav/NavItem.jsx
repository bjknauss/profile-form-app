import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({to, value, ...props}) => (
  <li className='nav-item'>
    <NavLink to={to} props={props} className='nav-link'>
      {value}
    </NavLink>
  </li>
)

export default NavItem