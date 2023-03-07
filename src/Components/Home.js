import React from "react";
import image from "../icons/image-1.jpg";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { BiShow } from "react-icons/bi";
import { SiLinkedin, SiGithub } from "react-icons/si";

function Home() {

  return (
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
                  .deleteChars(11)
                  .typeString(
                    'I am <span style="color:red">Web Developer.</span>'
                  )
                  .pauseFor(300)
                  .deleteChars(14)
                  .typeString(
                    '<span style="color:red">Full Stack Developer.</span>'
                  )
                  .pauseFor(300)
                  .start();
              }}
            />
          </div>
          <label className="intro">
            This is my official portfolio website to showcase my all work
            related to
            <br /> Full Stack Web Development{" "}
          </label>
          <br />
          <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1FUeYlSuzqeR1ZM42nqBQsRvxPmxkgNx0/view?usp=sharing" className="cv">
            <BiShow className="BiShow" />
            See My Resume.
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
              Linkedin
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Saurabhmhaisdhune"
              className="github-icon"
            >
              <SiGithub className="SiGithub" />
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="animation">
        <img src={image} className="home-image" alt="laptop-guy" />
      </div>
    </div>
  );
}

export default Home;
