import React from 'react';
import './nav.css';
// import logo from '../../assets/media/HatchfulExport Logo2/logo.png';
import logo from '../../assets/media/New_Blue Logo Whait_2 (2) (1).webp';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Nav() {
  return (
    <div className="container">
      <div className="nav-bar">
        <div className="header">

          <img src={logo} alt="" />

          <div className="center-holder">

            <div className="search-bar">
              <input placeholder={`I'm shopping for`} />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <a className="login" rel="stylesheet" href="#">
              <i class="fa-regular fa-user"></i>
              <p> Log In </p>
            </a>

            <div className="cart-icon">
              <button className="cart-btn">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="nav-holder"></div>
      </div>
    </div>
  );
}

export default Nav;
