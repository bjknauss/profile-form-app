import React from 'react'
import { Route, Switch } from 'react-router-dom'
import EditProfile from './EditProfile'
import NoUserSelected from '../components/NoUserSelected'

const Main = () => (
  <div>
    <Switch>
      <Route path="/" exact={true} component={NoUserSelected} />
      <Route path="/user/:id" component={EditProfile} />
    </Switch>
  </div>
)



export default Main