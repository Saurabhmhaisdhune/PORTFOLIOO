import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-margin-item" id="about">
      <div className="title">ABOUT</div>
      <hr className="hr" />
      <label className="about-lets">Let's get to know me.</label>
      <br />
      <label className="about-full">
        Full Stack Developer/ Front End Developer
      </label>
      <br />
      <p className="about-para">
        I specialize in Full Stack Web Development with a strong focus on
        Frontend technologies. My skills encompass both front-end and back-end
        technologies, including responsive frameworks, databases, and best code
        practices. I began my journey by teaching myself through online
        tutorials on Google, YouTube, and other resources. I later decided to
        take my learning to the next level and enrolled in the Full Stack
        developer Nanodegree Program at GUVI IIT MADRAS, where I worked on
        extensive programming and real-world projects. During this program, I
        discovered MERN Stack and built several websites using this technology.
        My ultimate goal is to become the best possible web developer,
        continuously learning from more experienced developers, remaining
        humble, and striving to improve my skills. Additionally, my strong
        problem-solving and problem identification skills contribute to my
        success as a developer.
      </p>
    </div>
  );
}

export default About;
