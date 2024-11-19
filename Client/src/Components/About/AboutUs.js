import React from 'react';
import './aboutUs.css';
import signature from '../../assets/media/About-sec/sincerely-hany-ramzy-ceo_001.webp';

import adidas from '../../assets/media/partners/adidas.png';
import cybex from '../../assets/media/partners/cybex-logo.png';
import hammerStrnegth from '../../assets/media/partners/hammer-strength-logo.png';
import BH from '../../assets/media/partners/bh-logo.jpeg';
import brusnwick from '../../assets/media/partners/brusnwick.png';
import helo from '../../assets/media/partners/helo-logo.gif';
import starTrac from '../../assets/media/partners/star-trac-logo.png';
import everLast from '../../assets/media/partners/everlast-logo.png';
import horizon from '../../assets/media/partners/horizon-logo.png';
import jacuzzi from '../../assets/media/partners/jacuzzi.png';
import joola from '../../assets/media/partners/joola-logo.png';
import Kettler from '../../assets/media/partners/Kettler-logo.png';
import trx from '../../assets/media/partners/trx-logo.png';
import butterfly from '../../assets/media/partners/butterfly.jpg';

import ourstoryPhoto from '../../assets/media/About-sec/SAXON_Bespoke_2-1024x1024.jpg';
import img from  '../../assets/media/tinified/pexels-michal-packo-663414463-20201303.jpg';

function AboutUs() {
  return (
    <div className="container about">
      <div className='bckground' > 
      <div className="photo-header">
        <h1 className="header-title">OUR STORY</h1>
        <p>
          From the North East of England through our passion to deliver
          exceptional bespoke gym equipment, Saxon Fitness was born.
        </p>
      </div>
      </div>
      <div className="text">
        <h2 className="sub-heading">What is Blue Shell mission?</h2>
        <p>
          We create innovative solutions to help people achieve fitness and we
          strive to make fitness available to all, at all ages and in places.
        </p>
        <p>
          We believe fitness is for everyone - for governments cutting health
          costs, companies boosting team morale, and individuals enhancing their
          wells.
        </p>
        <p>
          Our Fitness Equipment offers diverse solutions for gyms, schools,
          homes, and more. With innovative designs and energy-efficient
          solutions, we aim to inspire fitness and create unique training
          environments for all.
        </p>
        <img src={signature} alt="ceo-signature" id="ceo-signature" />
      </div>

      <div className="section-holder">
        <section className="image-section">
          <img src={ourstoryPhoto} alt="our-story" />
        </section>
        <section className="text-section">
          <h2 className="sub-heading">unrivalled quality</h2>
          <p>
            Long training sessions follow, and Dean begins sharing exercise tips
            with clients and friends over social media. Many ask about the power
            cage. Where is it from? Is it customisable? How do they get one? As
            he begins to build custom equipment to order, clarity forms around
            an idea. SAXON is born.
          </p>
          <p>
            Dean had done the rounds at the local gyms. He knew the limitations
            of the typical strength equipment. As a professional PT he knew what
            customers wanted, and his blood-deep understanding of metalwork
            meant he knew how to do things better.
          </p>
        </section>
      </div>

      <div className="partners">
        <h4 className="sub-heading">OUR PARTNERS</h4>
        <div className="partners-logos">
          <img src={joola} alt="joola" />
          <img src={adidas} alt="adidas" />
          <img src={trx} alt="trx" />
          <img src={Kettler} alt="kettler" />
          <img src={starTrac} alt="startrac" />
          <img src={cybex} alt="cybex" />
          <img src={BH} alt="bh" />
          <img src={butterfly} alt="butterfly" />
          <img src={helo} alt="helo" />
          <img src={brusnwick} alt="brunswick" />
          <img src={everLast} alt="everlast" />
          <img src={horizon} alt="horizon" />
          <img src={jacuzzi} alt="jacuzzi" />
          <img src={hammerStrnegth} alt="hammerStrength" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
