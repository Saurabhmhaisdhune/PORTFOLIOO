import React from "react";
import html from "../icons/html.png";
import css from "../icons/css.png";
import javascript from "../icons/javascript.png";
import bootstrap from "../icons/bootstrap.png";
import react from "../icons/react.png";
import mysql from "../icons/mysql.png";
import nodejs from "../icons/nodejs.png";
import mongodb from "../icons/mongodb.png";
import express from "../icons/express.png";
import aws from "../icons/aws.png";
import github from "../icons/github.png";
import postman from "../icons/postman.png";
import npm from "../icons/npm.png";
import mui from "../icons/mui.png";
import "./Skills.css";

function Skills() {
  return (
    <div id="skills">
      <div className="title">SKILLS</div>
      <hr className="hr" />
      <div className="skills-margin-item">
        <div className="flexx">
        <div className="skills-icons">
            <img src={react} alt="react" className="image-icons" />
            <label className="subject">React JS</label>
          </div>
          <div className="skills-icons">
            <img src={nodejs} alt="nodejs" className="image-icons" />
            <label className="subject">Node JS</label>
          </div>
          <div className="skills-icons">
            <img src={javascript} alt="javascript" className="image-icons" />
            <label className="subject">JavaScript</label>
          </div>
          <div className="skills-icons">
            <img src={express} alt="express" className="image-icons" />
            <label className="subject">Express JS</label>
          </div>
          <div className="skills-icons">
            <img src={mongodb} alt="mongodb" className="image-icons" />
            <label className="subject">MongoDB</label>
          </div>
          <div className="skills-icons">
            <img src={mysql} alt="mysql" className="image-icons" />
            <label className="subject">MySQL</label>
          </div>
          <div className="skills-icons">
            <img src={html} alt="HTML" className="image-icons" />
            <label className="subject">HTML</label>
          </div>
          <div className="skills-icons">
            <img src={css} alt="CSS" className="image-icons" />
            <label className="subject">CSS</label>
          </div>
          
          <div className="skills-icons">
            <img src={bootstrap} alt="bootstrap" className="image-icons" />
            <label className="subject">Bootstrap</label>
          </div>
          <div className="skills-icons">
            <img src={postman} alt="postman" className="image-icons" />
            <label className="subject">Postman</label>
          </div>
          <div className="skills-icons">
            <img src={github} alt="git" className="image-icons" />
            <label className="subject">GitHub</label>
          </div>
          <div className="skills-icons">
            <img src={npm} alt="git" className="image-icons" />
            <label className="subject">NPM</label>
          </div>
          <div className="skills-icons">
            <img src={aws} alt="aws" className="image-icons" />
            <label className="subject">AWS</label>
          </div>
          <div className="skills-icons">
            <img src={mui} alt="git" className="image-icons" />
            <label className="subject">Material UI</label>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Skills;
