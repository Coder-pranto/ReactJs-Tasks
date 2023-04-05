import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">React-router_dom</span>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/product" className="nav-link active_style">
               Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/user" className="nav-link">
                User
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Login" className="nav-link">
               Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/* external css: index.css 

.nav-link.active{
  color: orange;
}

inline css: index.css
 <NavLink to="/" className="nav-link"style= { ({isActive}) => {return {color: isActive ? 'green':'red'}}} >
                Home
              </NavLink>

*/