import React from "react";
import "./Project.css";
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import chats from "../icons/chatapp.png"
import ecommerce from "../icons/Ecommerce.png"

function Projects() {
  return (
    <div className="projects-margin-item" id="projects">
      <div className="title">PROJECT</div>
      <hr className="hr" />
      <div className="project-flexx">
        <div className="cards">
          <img
            src="https://i.pcmag.com/imagery/articles/025Oaztt0ita5uBZZnF7f6p-1..v1627072521.png"
            className="project-dp"
            alt="gmail-clone"
          />
          <div className="project-all">
            <label className="project-title">Gmail clone</label>
            <br />
            <label className="project-flex-links">
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
        <div className="cards">
          <img
            src={chats}
            className="project-dp"
            alt="chat app"
          />
          <div className="project-all">
            <label className="project-title">Chat App</label>
            <br />
            <label className="project-flex-links">
              <a target="_blank" href="https://github.com/Saurabhmhaisdhune/Chat-App-FE" className="project-links">
                Github FE <SiGithub />
              </a>
              <a target="_blank" href="https://6372294a2a37142d19fb47bb--beamish-moonbeam-3db5fe.netlify.app/" className="project-links">
                View site <FaExternalLinkAlt />
              </a>
              <a target="_blank" href="https://github.com/Saurabhmhaisdhune/Chat-app-BE" className="project-links">
                Github BE <SiGithub />
              </a>
            </label>
            <p className="project-info">
              This is Fullstack MERN website is used as chat application.
              <br />
              This application is used to send and recive messages.
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
        <div className="cards">
          <img
            src={ecommerce}
            className="project-dp"
            alt="gmail-clone"
          />
          <div className="project-all">
            <label className="project-title">E-Commerce</label>
            <br />
            <label className="project-flex-links">
              <a target="_blank" href="https://github.com/Saurabhmhaisdhune/E-Commerce-FE" className="project-links">
                Github FE <SiGithub />
              </a>
              <a target="_blank" href="https://glowing-gumption-82f38f.netlify.app" className="project-links">
                View site <FaExternalLinkAlt />
              </a>
              <a target="_blank" href="https://github.com/Saurabhmhaisdhune/E-commerce-Backend" className="project-links">
                Github BE <SiGithub />
              </a>
            </label>
            <p className="project-info">
              This is Fullstack MERN website is used as E-Commerce website.
              <br />
              This application is used for online shopping.
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
