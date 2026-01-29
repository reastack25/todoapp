import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
  return (
       <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Todoapp
        </Link>
      </div>
      <ul className="nav-menu">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/Task">Tasks</NavLink>
        </li>
     
      </ul>
    </nav>
  )
}

export default Navbar
