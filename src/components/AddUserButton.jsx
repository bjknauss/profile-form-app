import React from 'react'
import { NavLink } from 'react-router-dom'

const AddUserButton = (props) => (
  <div className="nav-item">
    <NavLink to={`/user/new`} className="nav-link">
      New User
    </NavLink>
  </div>
)

export default AddUserButton