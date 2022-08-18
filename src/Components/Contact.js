import React, { useState } from 'react'
import { FaGithub,FaLinkedin ,FaInstagram,FaStackOverflow,FaTwitter } from 'react-icons/fa';
import Axios from "axios";

function Contact() {
  const url="saurabhtheater.herokuapp.com/register/data"
  const[data, setData]=useState({
    name:"",
    email:"",
    message:""
  })
  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      name: data.name,
      email: data.email,
      message: data.message
    })
    .then(res=>{
      console.log(res.data)
    })

  }
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)
  }
  return (
    <div className='margin-item'>
    <div className='title'>CONTACT</div><hr/>
    <div className='contact-flex'>
      <div >
      <label>Name:</label><br/>
      <input 
      type='text'
      onChange={(e)=>handle(e)}
      id="name"
      value={data.name}
      className='contact-input'
      placeholder='Enter full name'/><br/>
      <label>Email:</label><br/>
      <input 
      type='email'
      onChange={(e)=>handle(e)}
      id="email"
      value={data.email}
      className='contact-input'
      placeholder='Enter valid email'/><br/>
      <label>Message:</label><br/>
      <input 
      type='text'
      onChange={(e)=>handle(e)}
      id="message"
      value={data.message}
      className='contact-inputs'
      placeholder='Enter message'/><br/>
      <button onClick={(e)=>submit(e)} className='button'>Submit</button>
      </div>
      <div className='contact-nips'>
        <h3 className='contact-list'>Email: <span className='contact-name-id'>saurabhmhaisdhune1@gmail.com</span></h3><br/>
        <h3 className='contact-list'>Address: <span className='contact-name-id'>Nashik, Maharashtra, India.</span></h3><br/>
        <h3 className='contact-list'>Phone Number: <span className='contact-name-id'>8956293676</span></h3><br/>
        <h3 className='contact-list'>Social Media: 
        <a href='https://github.com/Saurabhmhaisdhune'><FaGithub/></a>
        <a href='https://www.linkedin.com/in/mlsaurabh/'><FaLinkedin/></a>
        <a href='https://www.instagram.com/stubborn.sm/'><FaInstagram/></a>
        <a href='https://stackoverflow.com/users/19783086/saurabh-mhaisdhune'><FaStackOverflow/></a>
        <a href='https://twitter.com/SaurabhMhaisdh2'><FaTwitter/></a>
        </h3><br/>
      </div>
    </div>
    </div>
  )
}

export default Contact