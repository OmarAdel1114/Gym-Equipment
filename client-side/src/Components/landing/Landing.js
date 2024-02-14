import React from 'react'
import './landing.css'
import video from '../../assets/media/Gym cinematic promotion video.mp4'

function Landing() {
  return (
    <div className='container'>
      <video muted autoPlay loop  className='landing-video'>
        <source src={video} type='video/mp4'/>
      </video>
    </div>
  )
}

export default Landing
