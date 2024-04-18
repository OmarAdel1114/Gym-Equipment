import React from 'react';
import './about.css';
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

function About() {
  return (
    <div className="container about">
      <h3 className="header">ABOUT US</h3>
      <div className="text">
        <p>
          <span className="colored">What is Blue Shell mission?</span>
          We create innovative solutions to help people achieve fitness and we
          strive to make fitness available to all, at all ages and in all
          places.
        </p>
        <p>
          We believe fitness is for everyone - for governments cutting health
          costs, companies boosting team morale, and individuals enhancing their
          well-being.
        </p>
        <p>
          Our Fitness Equipment offers diverse solutions for gyms, schools,
          homes, and more. With innovative designs and energy-efficient
          solutions, we aim to inspire fitness and create unique training
          environments for all.
        </p>
        <img src={signature} alt="ceo-signature" />
      </div>
      <div className="partners">
        <h4 className="sub-header">OUR PARTNERS</h4>
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

export default About;
