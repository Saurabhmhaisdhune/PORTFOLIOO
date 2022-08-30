import React, { useState } from 'react'
import { FaGithub,FaLinkedin ,FaInstagram,FaStackOverflow,FaTwitter } from 'react-icons/fa';
import axios from 'axios';

let initialValue={
  name:"",
  email:"",
  message:""
}

function Contact() {
  const[data, setData]=useState(initialValue);

  const handleChange=(e)=>{
    setData({...data, [e.target.name]: e.target.value});
    console.log(data);
  };
  
  const handleSubmit=()=>{
    axios
    .post("https://moviesam.herokuapp.com/movies",JSON.stringify(data),
    {
      headers:{
        "Content-type": "application/json"
      }})
      .then(() => setData(initialValue));
  };

  return (
    <div className='margin-item'>
    <div className='title'>CONTACT</div><hr/>
    <div className='contact-flex'>
      <div >

      <label>Name:</label><br/>

      <input 
      type='text'
      onChange={handleChange}
      name='name'
      className='contact-input'
      placeholder='Enter full name'/><br/>

      <label>Email:</label><br/>

      <input 
      type='email'
      onChange={handleChange}
      name='email'
      className='contact-input'
      placeholder='Enter valid email'/><br/>

      <label>Message:</label><br/>

      <input 
      type='text'
      onChange={handleChange}
      name='message'
      className='contact-inputs'
      placeholder='Enter message'/><br/>

      <button onClick={handleSubmit} type='button' className='button'>Submit</button>
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