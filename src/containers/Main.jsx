import React from 'react'
import { Route } from 'react-router-dom'
import EditProfile from './EditProfile'

const Main = () => (
  <div>
    <Route path="/user/:id" component={EditProfile} />
  </div>
)



export default Main