import React from "react";
import image from "../icons/image-1.jpg";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { FaGraduationCap } from "react-icons/fa";
import { SiLinkedin, SiGithub } from "react-icons/si";

function Home() {
  return (
    <div className="home-back">
      <div className="home-margin-items" id="home">
        <div className="home-flex">
          <div>
            <label className="name-tag">
              <span className="hi-text">Hi there, I'm</span>
              <br />
              <span className="highlight">Saurabh</span> Mhaisdhune.
            </label>
            <br />
            <div className="typewriter">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      'I am <span style="color:red">Front-End Developer.</span>'
                    )
                    .pauseFor(400)
                    .deleteChars(20)
                    .typeString(
                      '<span style="color:red">React Developer.</span>'
                    )
                    .pauseFor(400)
                    .deleteChars(16)
                    .typeString(
                      '<span style="color:red">Full Stack Developer.</span>'
                    )
                    .pauseFor(400)
                    .start();
                }}
              />
            </div>
            <label className="intro">
              This is my official portfolio website to showcase my all work
              related to
              <br /> Full Stack Development/Front-End Development.
            </label>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1als_R8ixUJ1lGzsifsJ2p_YdynjiMmDs/view?usp=sharing"
              className="cv"
            >
              <FaGraduationCap className="BiShow" />
              <span>My Resume</span>
            </a>
            <br />
            <div className="icons">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/mlsaurabh/"
                className="linkedin-icon"
              >
                <SiLinkedin className="SiLinkedin" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Saurabhmhaisdhune"
                className="github-icon"
              >
                <SiGithub className="SiGithub" />
              </a>
            </div>
          </div>
        </div>
        <div className="animation">
          <img
            src={image}
            className="home-image"
            alt="laptop-guy"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
