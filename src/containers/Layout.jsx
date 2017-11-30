import React from 'react'

import Main from './Main'
import Sidebar from './Sidebar'
import NavHeader from '../nav/NavHeader'

let style = {
  marginBottom: '1em'
}

const Layout = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-12" style={style} >
        <NavHeader />
      </div>
    </div>
    <div className="row">
      <div className="sidebar col-sm-3">
        <Sidebar />
      </div>
      <div className="main col">
        <Main />
      </div>
    </div>
  </div>
)

export default Layout