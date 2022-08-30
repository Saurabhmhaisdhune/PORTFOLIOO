import React from 'react'
import pro from './dp.jpg';

function Home() {
  return (
    <div className='margin-items'>
    <div className='title'>HOME</div><hr/>
    <div className='home-flex'>
    <div>
      <img src={pro} className='dp' alt='profile'/>
    </div>
    <div>
    <label className='hello'>Hello My Name is</label><br/>
    <label className='saurabh'>Saurabh Lahanu Mhaisdhune</label><hr className='home-line'/><br/>
    <label className='fsd'>Full Stack Developer based in India</label>
    </div>
    </div>
    </div>
  )
}

export default Home