import React from "react";
import './NavBar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgCodeSlash} from 'react-icons/cg';

function NavBar(params) {
  return (
    <div className="navbar">
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span className="name"><CgCodeSlash className="CgCodeSlash"/> Saurabh Mhaisdhune</span>
          </h2>
        </div>
        <div
          onClick={() => {
            params.setShow((prev) => !prev);
          }}
          className="sidebar-btn">
          <GiHamburgerMenu />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
