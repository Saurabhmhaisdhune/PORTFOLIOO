import React from 'react'
import html from '../icons/html.png'
import css from '../icons/css.png'
import javascript from '../icons/javascript.png'
import bootstrap from '../icons/bootstrap.png'
import react from '../icons/react.png'
import mysql from '../icons/mysql.png'
import nodejs from '../icons/nodejs.png'
import mongodb from '../icons/mongodb.png'
import express from '../icons/express.png'
import aws from '../icons/aws.png'
import git from '../icons/git.png'
import postman from '../icons/postman.png'

function Skills() {
  return (
    <>
    <div className='margin-item'>
    <div className='title'>SKILLS</div><hr/>
    <div className='flexx'>
          <div className='icons'>
            <img src={html} alt="HTML" className='image'/>
            <label className='subject'>
              HTML
            </label>
          </div>
          <div className='icons'>
            <img src={css} alt="CSS" className='image'/>
            <label className='subject'>
              CSS
            </label>
          </div>
          <div className='icons'>
            <img src={javascript} alt="javascript" className='image'/>
            <label className='subject'>
              JAVASCRIPT
            </label>
          </div>
          <div className='icons'>
            <img src={bootstrap} alt="bootstrap" className='image'/>
            <label className='subject'>
              BOOTSTRAP
            </label>
          </div>
          <div className='icons'>
            <img src={react} alt="react" className='image'/>
            <label className='subject'>
              REACT
            </label>
          </div>
          <div className='icons'>
            <img src={mysql} alt="mysql" className='image'/>
            <label className='subject'>
              MYSQL
            </label>
          </div>
          <div className='icons'>
            <img src={nodejs} alt="nodejs" className='image'/>
            <label className='subject'>
              NODE JS
            </label>
          </div>
          <div className='icons'>
            <img src={mongodb} alt="mongodb" className='image'/>
            <label className='subject'>
              MONGODB
            </label>
          </div>
          <div className='icons'>
            <img src={express} alt="express" className='image'/>
            <label className='subject'>
              EXPRESS
            </label>
          </div>
          <div className='icons'>
            <img src={aws} alt="aws" className='image'/>
            <label className='subject'>
              AWS
            </label>
          </div>
          <div className='icons'>
            <img src={git} alt="git" className='image'/>
            <label className='subject'>
              GIT
            </label>
          </div>
          <div className='icons'>
            <img src={postman} alt="postman" className='image'/>
            <label className='subject'>
              POSTMAN
            </label>
          </div>
      </div>
      </div> 
    </>
  )
}

export default Skills