import React from 'react'
import { Route, Switch } from 'react-router'

import UserSidebar from './UserSidebar'
import AuthorSidebar from './AuthorSidebar'


const Sidebar = (props) => (
  <div>
    <Switch>
      <Route path='/' exact render={UserSidebar} />
      <Route path='/user' render={UserSidebar} />
      <Route path='/author' render={AuthorSidebar} />
      <Route path='/authors' render={AuthorSidebar} />
    </Switch>
  </div>
)

export default Sidebar