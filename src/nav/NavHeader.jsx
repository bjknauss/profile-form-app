import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#brand">Prototype</a>
        <button className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/authors" className='nav-link' activeClassName="active">Authors</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/" 
                  className='nav-link' 
                  activeClassName="active">Users</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/user/new" 
                className='nav-link' 
                activeClassName="active">New User</NavLink>
            </li>
          </ul>
        </div>
      </nav>

    );
  }
}