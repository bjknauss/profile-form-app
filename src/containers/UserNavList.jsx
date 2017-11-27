import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const NavUsersContainer = ({users}) => {
  let userLinks = users.map((user) => <NavUserItem key={user.id} user={user} />)
  return (
    <div className="users-list">
      <h3>Users</h3>
      <ul className="nav nav-pills nav-fill flex-column">
        {userLinks}
      </ul>
    </div>
  )
}

const NavUserItem = ({user}) => (
  <li className="nav-item">
    <NavLink to={`/user/${user.id}`} className="nav-link">
      {user.username}
    </NavLink>
  </li>
)

const mapStateToProps = state => ({
  users: state.users,
  selectedUser: state.selectedUser
})

const UserNavList = connect(mapStateToProps)(NavUsersContainer)

export default UserNavList