import React from 'react'
import { Route, Switch } from 'react-router-dom'
import EditProfile from './EditProfile'
import NoUserSelected from '../users/NoUserSelected'
import AddUser from '../users/AddUser'
import AuthorsPage from './AuthorsPage'
import EditAuthorPage from '../author/EditAuthorPage'

const Main = () => (
  <div>
    <Switch>
      <Route path="/" exact={true} component={NoUserSelected} />
      <Route path="/user/new" exact={true} component={AddUser} />
      <Route path="/author/edit/:id" component={EditAuthorPage} />
      <Route path="/authors" component={AuthorsPage} />
      <Route path="/user/:id" component={EditProfile} />
    </Switch>
  </div>
)



export default Main