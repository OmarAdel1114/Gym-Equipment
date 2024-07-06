import React from 'react';
import './landing.css';
// import photo from '../../assets/media/gym landing.jpg'
// import photo from '../../assets/media/pexels-michal-packo-663414463-20201303.jpg';

function Landing() {
  return (
    <div className="container landing">
      {/* <div className="landing-image">
        <img src={photo} alt="landing" />
      </div> */}
      <div className="text">
        <p className="bigger">
          {' '}
          Gear Up for <span id="colored">Success</span>{' '}
        </p>
        <p className="small">
          We are a complete ecosystem of High-Quality fitness solutions. We
          offer high standard equipment and a variety of services to set up your
          gym from scratch
        </p>
        <button>Shop Now</button>
        <p className="small">At the gym, hotels, home and more.</p>
      </div>
    </div>
  );
}

export default Landing;
