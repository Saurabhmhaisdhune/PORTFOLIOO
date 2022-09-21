import React from "react";
import "./About.css";
import { AiOutlineForward } from "react-icons/ai";

function About() {
  return (
    <div className="about-margin-item" id="about">
      <div className="title">ABOUT</div>
      <hr className="hr" />
      <label className="about-lets">Let's get to know me.</label>
      <br />
      <label className="about-full">Full Stack Web Developer/MERN Stack</label>
      <br />
      <p className="about-para">
        I am a web developer with a knowledge in front end and back end
        technologies, responsive frameworks, databases, and best code practices,
        My goal is to be the best web developer that I can be and to contribute
        to the technology industry all that I know and can do. I am dedicated to
        perfecting my craft by learning from more seasoned developers, remaining
        humble, and continuously making strides to learn all that i can about
        development. I believe that my understanding of problem solving and
        problem identification are also skills that i have and will continue to
        contribute to my overall success as a developer.
      </p>
      <div className="about-flex-item">
        <label className="information">
          <AiOutlineForward className="AiOutlineForward" />
          <span className="about-title">&nbsp;Degree:</span>&nbsp;Engineering.
        </label>
        <label className="information">
          <AiOutlineForward className="AiOutlineForward" />
          <span className="about-title">&nbsp;University:</span>&nbsp;Savitribai
          Phule Pune University(SPPU)
        </label>
        <label className="information">
          <AiOutlineForward className="AiOutlineForward" />
          <span className="about-title">&nbsp;Languages:</span>&nbsp;English,
          Marathi, Hindi.
        </label>
        <label className="information">
          <AiOutlineForward className="AiOutlineForward" />
          <span className="about-title">&nbsp;Born city:</span>&nbsp;Thane,
          Maharashtra.
        </label>
        <label className="information">
          <AiOutlineForward className="AiOutlineForward" />
          <span className="about-title">&nbsp;Nationality:</span>&nbsp;Indian.
        </label>
      </div>
      <p className="about-para">
        I Started off my self-learning journey with online tutorials Google,
        YouTube, etc and found it inetresting and decided to take a step further and Enrolled
        in the GUVI IIT MADRAS Fullstack developer Nanodegree Program which
        involved extensive programming and real world projects. Later, I learned
        MERN Stack From Guvi and built an Website using React JS, Node, Express
        Js, MongoDB.
      </p>
    </div>
  );
}

export default About;
