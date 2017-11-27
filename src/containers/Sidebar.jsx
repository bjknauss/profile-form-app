import React from 'react'
import { Route } from 'react-router'
import UserNavList from './UserNavList'


const Sidebar = (props) => (
  <div>
    <h3>This is the sidebar</h3>
    <UserNavList />
  </div>
)

export default Sidebar