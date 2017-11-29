import React from 'react'

import Main from './Main'
import Sidebar from './Sidebar'

const Layout = () => (
  <div className="container" style={{ margin: '30px 20px' }}>
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