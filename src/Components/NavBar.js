import React from "react";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCodeSlashSharp,IoCodeSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function NavBar(params) {
  return (
    <div className="navbar">
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span className="name">
              <IoCodeSharp className="CgCodeSlash" /> Saurabh Mhaisdhune <IoCodeSlashSharp className="CgCodeSlash" />
            </span>
          </h2>
        </div>
        <div className="menu-link-12">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-270}
            duration={500}
            className="links"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="links"
          >
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="links"
          >
            Skills
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="links"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="links"
          >
            Contact
          </Link>
        </div>
        <div
          onClick={() => {
            params.setShow((prev) => !prev);
          }}
          className="sidebar-btn"
        >
          <GiHamburgerMenu />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
