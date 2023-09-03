import React from "react";
import "./About.css";
import trophy from "../icons/trophy.png";
import certification from "../icons/certificate.png";
import coding from "../icons/coding.png";
import education from "../icons/grad.png";

function About() {
  return (
    <div className="about-margin-item" id="about">
      <div className="title">About</div>
      <h1 className="about-lets">
        <span>Let's get to know me.</span>
        <hr className="hr2" />
      </h1>
      <div className="para-edu">
        <div className="about-para">
          <img src={coding} alt="overall" className="about-img" />
          <h2 className="about-full">Summary</h2>
          <p>
            I specialize in Full Stack Web Development with a strong focus on
            Frontend technologies. My skills encompass both front-end and
            back-end technologies, including responsive frameworks, databases,
            and best code practices. I began my journey by teaching myself
            through online tutorials on Google, YouTube, and other resources. I
            later decided to take my learning to the next level and enrolled in
            the Full Stack developer Nanodegree Program at GUVI IIT MADRAS,
            where I worked on extensive programming and real-world projects.
            During this program, I discovered MERN Stack and built several
            websites using this technology. 
          </p>
        </div>
        <div className="about-para">
          <img src={education} alt="edu" className="about-img" />
          <h2 className="about-full">Education</h2>
          <p className="education-details">
            <li><span style={{fontWeight:"bold"}}>Degree :</span> Bachelor of Engineering.</li>
            <li><span style={{fontWeight:"bold"}}>University :</span> Savitribai Phule Pune University.</li>
            <li><span style={{fontWeight:"bold"}}>
              Institude :</span> Gokhale Education Society's R. H. Sapat College of
              Engineering, Management Studies and Research.
            </li>
            <li><span style={{fontWeight:"bold"}}>Branch :</span> Mechanical Engineering.</li>
            <li><span style={{fontWeight:"bold"}}>Passout Year :</span> 2021</li>
          </p>
        </div>
        <div className="about-para">
          <img src={certification} alt="edu" className="about-img" />
          <h2 className="about-full">Certification</h2>
          <h4>Full Stack Development</h4>
          <p>
            I have recently completed a comprehensive 6-month Full Stack
            Development Nano-degree program from GUVI-GEEKS based Chennai in an
            Online mode, where I have gained proficiency in HTML, CSS,
            JavaScript, React JS, Node JS, MongoDB, Express JS, MySQL, GitHub,
            Bootstrap, Material UI, and NPM. During the course, I have
            successfully developed 4 projects, which are mentioned in detail on
            my resume.
          </p>
        </div>
        <div className="about-para">
          <img src={trophy} alt="edu" className="about-img" />
          <h2 className="about-full">Achievement</h2>
          <h4>SUPRA SAEINDIA</h4>
          <p>
            Our team achieved an impressive 19th Rank in the prestigious SUPRA
            SAEINDIA Student Formula-1 car manufacturing competition in 2018. This national-level
            event, organized by the Society of Automobile Engineers India,
            brings together students from colleges across India.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
