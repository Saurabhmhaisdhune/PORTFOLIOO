import React from "react";
import "./Sidebar.css";
import { Link } from "react-scroll";
import {HiOutlineHome} from "react-icons/hi"
import {GrProjects} from "react-icons/gr"
import {FaLaptopCode} from "react-icons/fa"
import {RiContactsLine} from "react-icons/ri"
import {FaLink} from "react-icons/fa"

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
            ><span><HiOutlineHome/></span>
              <span>Home</span>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="li"
            ><span><GrProjects/></span>
            <span>About</span>
              
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="li"
            ><span><FaLaptopCode/></span>
            <span> Skills</span>
             
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="li"
            ><span><FaLink/></span>
              <span>Projects</span>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="li"
            ><span><RiContactsLine/></span>
            <span>Contacts</span>
              
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Sidebar;
