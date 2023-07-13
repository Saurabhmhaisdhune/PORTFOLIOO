import React, { useState } from "react";
import "./NavBar.css";
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";
import { Link } from "react-scroll";
import weblogo from "../icons/saur.png"

function NavBar(params) {
  const [show, setShow] = useState(false);

  const handleChange = () => {
    params.setShow((prev) => !prev);
    setShow((prev) => !prev);
  };
  const handleButtonClick = (buttonName) => {
    params.setActiveButton(buttonName);
  };
  return (
    <div className="main-nav">
      <div className="logo">
        <div className="name">
          <img src={weblogo} className="web-logo" alt="pro"/>
          <span className="saurabh-m">Saurabh.M</span>
        </div>
      </div>
      <div className="menu-link-12">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-270}
          duration={500}
          className={params.activeButton === 'button1' ? 'current-comp' : 'links'}
          onClick={() => handleButtonClick('button1')}
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={40}
          duration={500}
          className={params.activeButton === 'button2' ? 'current-comp' : 'links'}
          onClick={() => handleButtonClick('button2')}
        >
          About
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={params.activeButton === 'button3' ? 'current-comp' : 'links'}
          onClick={() => handleButtonClick('button3')}
        >
          Skills
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={params.activeButton === 'button4' ? 'current-comp' : 'links'}
          onClick={() => handleButtonClick('button4')}
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={params.activeButton === 'button5' ? 'current-comp' : 'links'}
          onClick={() => handleButtonClick('button5')}
        >
          Contact
        </Link>
      </div>
      <div onClick={handleChange} className="sidebar-btn">
        {show ? <GrClose /> : <VscMenu />}
      </div>
    </div>
  );
}

export default NavBar;
