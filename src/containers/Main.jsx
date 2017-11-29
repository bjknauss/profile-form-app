import React from 'react'
import { Route, Switch } from 'react-router-dom'
import EditProfile from './EditProfile'
import NoUserSelected from '../users/NoUserSelected'
import AddUser from '../users/AddUser'

const Main = () => (
  <div>
    <Switch>
      <Route path="/" exact={true} component={NoUserSelected} />
      <Route path="/user/new" exact={true} component={AddUser} />
      <Route path="/user/:id" component={EditProfile} />
    </Switch>
  </div>
)



export default Main