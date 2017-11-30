import React from 'react'

import AddUserButton from '../users/AddUserButton'
import UserNavList from './UserNavList'

const UserSidebar = (props) => (
  <div>
    <AddUserButton />
    <hr />
    <UserNavList />
  </div>
)

export default UserSidebar