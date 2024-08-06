import React, { useRef, useState } from 'react';
import './nav.css';
import logo from '../../assets/media/New_Blue Logo Whait_2 (2) (1).webp';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Nav({ toggleCart }) {
  const [isHovered, setIsHovered] = useState(null);
  const timeOutRef = useRef(null);

  const hoverMouseEnter = (i) => {
    setIsHovered(i);
    if (timeOutRef.current) {
      // clearTimeout(timeOutRef.current);
    }
    // console.log(`is Hovered: ${isHovered}`);
    // const list = document.createElement("div");
    // list.className = "drop-down-list";
    // list.appendChild(e.target)
  };

  // const hoverMouseLeave = () => {
  //   timeOutRef.current = setTimeout(() => {
  //     setIsHovered(null);
  //   }, 200);
  // };

  function openNav() {
    document.querySelector('.side-menu').style.width = '300px';
    document.querySelector('.side-menu').style.padding = '10px';
  }
  function closeNav() {
    document.querySelector('.side-menu').style.width = '0';
    document.querySelector('.side-menu').style.padding = '0';
  }

  return (
    <div className="container">
      <div className="side-menu">
        <div id="close-btn" onClick={closeNav}>
          <a href="#home" className="exit">
            X
          </a>
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="/Shop" onClick={() => (window.location.href = '/Shop')}>
              SHOP
            </a>
          </li>
          <li>
            <a href="#ABOUT">ABOUT US</a>
          </li>
          <li>
            <a href=".contact-us">CONTACT</a>
          </li>
        </ul>
        <div className="Lang">
          <div>
            <a href="#home">English</a>
          </div>
          <div>
            <a href="#home">Arabic </a>
          </div>
        </div>
      </div>

      <div className="nav-bar">
        <div className="header">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="blue-shell-logo" />
            </a>
          </div>
          <div className="nav-holder">
            {/* <ul className={isHovered ? 'nav-bar-hover' : 'nav-bar'}> */}
            <ul className={isHovered ? 'nav-bar' : 'nav-bar'}>
              <li>
                <a href="/" className="item">
                  HOME
                </a>
              </li>
              <li>
                <a href="/Shop" className="item">
                  SHOP
                </a>
              </li>
              <li>
                <a
                  href="/ABOUT"
                  className="item"
                  onClick={() => (window.location.href = '/Shop')}
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  href="/contactUs"
                  className="item"
                  onClick={() => (window.location.href = '/contact')}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          <div className="center-holder">
            {/* <div className="search-bar">
              <input placeholder={`I'm shopping for`} />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div> */}

            <a
              className="login"
              rel="stylesheet"
              href="/Login"
              onClick={() => (window.location.href = '/Login')}
            >
              <i className="fa-regular fa-user"></i>
              <p id="login"> </p>
            </a>
            <div className="cart-icon">
              <button className="cart-btn" onClick={toggleCart}>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
            <div className="menu" onClick={openNav}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
