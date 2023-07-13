import React from "react";
import html from "../icons/html.png";
import css from "../icons/css.png";
import javascript from "../icons/javascript.png";
import bootstrap from "../icons/bootstrap.png";
import react from "../icons/react.png";
import mysql from "../icons/mysql.png";
import node from "../icons/nodejs.png";
import mongodb from "../icons/mongodb.png";
import express from "../icons/express.png";
import aws from "../icons/aws.png";
import github from "../icons/github.png";
import postman from "../icons/postman.png";
import npm from "../icons/npm.png";
import mui from "../icons/mui.png";
import netlify from "../icons/netlify.png";
import vscode from "../icons/vscode.png";
import redux from "../icons/redux.png";
import "./Skills.css";

const data=[
 {
  image:html,
  subject:"HTML"
 },
 {
  image:css,
  subject:"CSS"
 },
 {
  image:javascript,
  subject:"JavaScript"
 },
 {
  image:react,
  subject:"React JS"
 },
 {
  image:bootstrap,
  subject:"Bootstrap"
 },
 {
  image:node,
  subject:"Node JS"
 },
 {
  image:express,
  subject:"Express JS"
 },
 {
  image:mongodb,
  subject:"MongoDB"
 },
 {
  image:mysql,
  subject:"MySQL"
 },
 {
  image:redux,
  subject:"Redux"
 },
 {
  image:mui,
  subject:"Material UI"
 },
 {
  image:github,
  subject:"GitHub"
 },
 {
  image:postman,
  subject:"Postman"
 },
 {
  image:npm,
  subject:"NPM"
 },
 {
  image:aws,
  subject:"AWS"
 },
 {
  image:vscode,
  subject:"VS Code"
 },
 {
  image:netlify,
  subject:"Netlify"
 }
]

function Skills() {
  return (
    <div id="skills">
      <div className="title">Skills</div>
      <h1 className="about-lets">
        <span>Technical Skills I Know</span>
        <hr className="hr2" />
      </h1>
      <div className="skills-margin-item">
        <div className="flexx">
          {data.map((value,index)=>{
            return(
        <div className="skills-icons" key={value.subject}>
            <img src={value.image} alt={value.subject} className="image-icons" />
            <label className="subject">{value.subject}</label>
          </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
