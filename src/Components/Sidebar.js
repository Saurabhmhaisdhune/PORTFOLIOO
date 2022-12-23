import React from "react";
import "./Sidebar.css";
import { Link } from "react-scroll";

function Sidebar(params) {
  return (
    <div className="sidebar-main">
      {params.show ? (
        <div className="menu-link">
          <div className="menu-link-1">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-270}
              duration={500}
              className="li"
            >
              HOME
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="li"
            >
              ABOUT
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="li"
            >
              SKILLS
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="li"
            >
              PROJECTS
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="li"
            >
              CONTACT
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Sidebar;
