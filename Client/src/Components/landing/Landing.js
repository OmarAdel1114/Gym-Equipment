import React from 'react'
import './landing.css'
import photo from '../../assets/media/gym landing.jpg'

function Landing() {
  return (
    <div className='container landing'>
      <img src= {photo} alt='landing'/>
      <div className='text'>
       <p> Easy with our <span id='colored'>Gym</span> </p>
      <button>Shop Now</button>
      <p className='small'>At the gym, hotels, home and more.</p>
      </div>
    </div>
  )
}

export default Landing
