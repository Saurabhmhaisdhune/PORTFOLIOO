import React from "react";
import "./Project.css";
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <div className="projects-margin-item" id="projects">
      <div className="title">PROJECT</div>
      <hr className="hr" />
      <div className="flexx">
        <div className="cards">
          <img
            src="https://i.pcmag.com/imagery/articles/025Oaztt0ita5uBZZnF7f6p-1..v1627072521.png"
            className="project-dp"
            alt="gmail-clone"
          />
          <div className="project-all">
            <label className="project-title">Gmail clone</label>
            <br />
            <label className="project-flex">
              <a target="_blank" href="https://github.com/Saurabhmhaisdhune/Gmail_clone" className="project-links">
                Github FE <SiGithub />
              </a>
              <a target="_blank" href="https://incandescent-tiramisu-9886d5.netlify.app" className="project-links">
                View site <FaExternalLinkAlt />
              </a>
              <a target="_blank" href="https://github.com/Saurabhmhaisdhune/Gmail-clone-database" className="project-links">
                Github BE <SiGithub />
              </a>
            </label>
            <p className="project-info">
              This is Fullstack MERN website is used as Gmail.
              <br />
              This application is used to send and recive Mails.
            </p>
            <br />
            <label className="project-tech">
              <span className="project-tech1">TECH USED:</span>
              <span className="project-tech2">
                &nbsp;React, Node, Express, MongoDB.
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
