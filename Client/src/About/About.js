import React from 'react';
import './about.css';
import Nav from '../Components/nav/Nav';
// import Landing from '../Components/landing/Landing';
import Footer from '../Components/Footer/Footer';
import AboutUs from '../Components/About/AboutUs';
import AppLayout from '../Components/appLayout';

function About() {
  return (
    <div>
      <AppLayout>
        <AboutUs />
      </AppLayout>
    </div>
  );
}

export default About;
