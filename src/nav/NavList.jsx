import React from 'react'
import NavItem from './NavItem'

const NavList = ({items}) => {
  let itemNavs = items.map((i) => {
    let { to, value, id, ...others } = i
    return (
      <NavItem to={to} key={id} value={value} others />
    )
  })
  return (
    <ul className="nav nav-list nav-pills nav-fill flex-column">
      {itemNavs}
    </ul>
  )
}

export default NavList