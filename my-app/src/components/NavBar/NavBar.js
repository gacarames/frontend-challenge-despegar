import React from 'react';
import './NavBar.scss';

const NavBar = (props) => (
  <nav className="nav">
    <div className="nav__wrapper">
      {props.children}
    </div>
  </nav> 
);

export default NavBar;
