import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
  return (
    <>    <nav className="navbar">
        <div className="nav-brand">
        <Link to="/">TodoApp </Link>
      </div>
      
      <ul className="nav-menu">
        <li>
          <NavLink to ="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Tasks">Tasks </NavLink>
        </li>
        <li>
          <NavLink to="/About"> About </NavLink>
        </li>
      </ul>
      
    </nav>
    <header className="header">
        <p>Welcome to NextUp</p>
      </header></>
   

  );

}

export default NavBar
