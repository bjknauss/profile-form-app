import React from 'react'
import { Route } from 'react-router'
import UserNavList from './UserNavList'
import AddUserButton from '../components/AddUserButton'


const Sidebar = (props) => (
  <div>
    <AddUserButton />
    <hr />
    <UserNavList />
  </div>
)

export default Sidebar