import React, { useRef, useState } from 'react';
import './nav.css';
// import logo from '../../assets/media/HatchfulExport Logo2/logo.png';
import logo from '../../assets/media/New_Blue Logo Whait_2 (2) (1).webp';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Nav() {
  const [isHovered, setIsHovered] = useState(null);
  const timeOutRef = useRef(null);

  const hoverMouseEnter = (i) => {
    setIsHovered(i);
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
    console.log(`is Hovered: ${isHovered}`);
    // const list = document.createElement("div");
    // list.className = "drop-down-list";
    // list.appendChild(e.target)
  };

  const hoverMouseLeave = () => {
    timeOutRef.current = setTimeout(() => {
      setIsHovered(null);
    }, 200);
  };

  function openNav() {
    document.querySelector('.side-menu').style.width = '300px';
    document.querySelector('.side-menu').style.padding = '40px';
  }
  function closeNav() {
    document.querySelector('.side-menu').style.width = '0';
    document.querySelector('.side-menu').style.padding = '0';
  }

  return (
    <div className="container">
      <div className='side-menu'>
        <ul>
        <li id='close-btn' onClick={closeNav}><a href='#'>X</a></li>
          <li><a href='#home'>Home</a></li>
          <li><a href='#gym-equipment'>Gym-Equipment</a></li>
          <li><a href='#cardio'>Cardio</a></li>
          <li><a href='#home-gym'>Home-Gym</a></li>
          <li><a href='#accessories'>Accessories</a></li>
          <li><a href='#spa'> Spa</a></li>
          <li><a href='#rec-room'> Rec-Room</a></li>
          <li><a href='#locker'> Locker</a></li>
        </ul>
        <div className='Lang.'>
          <div><a href='#home'>English</a></div>
          <div> <a href='#home'>Arabic </a> </div>
        </div>
      </div>
      <div className="nav-bar">
        <div className="header">
          <img src={logo} alt="" />

          <div className="center-holder">
            <div className="search-bar">
              <input placeholder={`I'm shopping for`} />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <a
              className="login"
              rel="stylesheet"
              href="/Login"
              onClick={() => (window.location.href = '/Login')}
            >
              <i className="fa-regular fa-user"></i>
              <p id='login'> Log In </p>
            </a>

            <div className="cart-icon">
              <button className="cart-btn">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
            <div className='menu' onClick={openNav}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="nav-holder">
          {/* <ul className={isHovered ? 'nav-bar-hover' : 'nav-bar'}> */}
          <ul className={isHovered ? 'nav-bar' : 'nav-bar'}>
              <li
                onMouseEnter={() => hoverMouseEnter(1)}
                onMouseLeave={hoverMouseLeave}
              >
                <a href="/Home" className="item">
                  Home
                </a>
                {/* {isHovered === 1 && (
                  <ul className="drop-down">
                    <li>Upper Body Equipment</li>
                    <li>Lower Body Equipment</li>
                    <li>Torso Gym Equipment</li>
                    <li>Weight Benches and Rack</li>
                    <li>Cable Motion Gym</li>
                    <li>Plate Loaded Machines</li>
                    <li>Egyptian Gym Equipment</li>
                  </ul>
                )} */}
              </li>
            <li
              onMouseEnter={() => hoverMouseEnter(2)}
              onMouseLeave={hoverMouseLeave}
            >
              <a href="/GymEquipment" className="item">
                Gym Equipment
              </a>
              {isHovered === 2 && (
                <ul className="drop-down">
                  <li>
                    <a href="#home">Upper Body Equipment</a>
                  </li>
                  <li>
                    <a href="#home">Lower Body Equipment</a>
                  </li>
                  <li>
                    <a href="#home">Torso Gym Equipment</a>
                  </li>
                  <li>
                    <a href="#home">Weight Benches and Rack</a>
                  </li>
                  <li>
                    <a href="#home">Cable Motion Gym</a>
                  </li>
                  <li>
                    <a href="#home">Plate Loaded Machines</a>
                  </li>
                  <li>
                    <a href="#home">Egyptian Gym Equipment</a>
                  </li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => hoverMouseEnter(3)}
              onMouseLeave={hoverMouseLeave}
            >
              <a href="/Cardio" className="item">
                Cardio
              </a>
              {isHovered === 3 && (
                <ul className="drop-down">
                  <li>Commercial Treadmills</li>
                  <li>Commercial Elliptical</li>
                  <li>Commercial Stationary Bikes</li>
                  <li>Commercial Spin Bikes</li>
                  <li>Stair Climbers & Steppers</li>
                  <li>Other Cardio</li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => hoverMouseEnter(4)}
              onMouseLeave={hoverMouseLeave}
            >
              <a href="/HomeGym" className="item">
                Home Gym
              </a>
              {isHovered === 4 && (
                <ul className="drop-down">
                  <li>Cairdo Machines For Home</li>
                  <li>Home Gym Equipment</li>
                  <li>Milti Gym For Home</li>
                  <li>Woman's Fitness Equipment</li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => hoverMouseEnter(5)}
              onMouseLeave={hoverMouseLeave}
            >
              <a href="/Accessories" className="item">
                Accessories
              </a>
              {isHovered === 5 && (
                <ul className="drop-down">
                  <li>Functional Gym Equipment</li>
                  <li>Dumbbells & Kettlebells</li>
                  <li>Weightlifting Bars & Plates</li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => hoverMouseEnter(6)}
              onMouseLeave={hoverMouseLeave}
            >
              <a href="/Spa" className="item">
                Spa
              </a>
              {isHovered === 6 && (
                <ul className="drop-down">
                  <li>Outdoor Whirlpools</li>
                  <li>Sauna & Steam Rooms</li>
                  <li>Massage Therapy</li>
                  <li>physiotherapy Equipment</li>
                  <li>Body Sculpting</li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => hoverMouseEnter(7)}
              onMouseLeave={hoverMouseLeave}
            >
              <a href="/Rec-Room" className="item">
                Rec Room
              </a>
              {isHovered === 7 && (
                <ul className="drop-down">
                  <li>Pool Tables</li>
                  <li>Table Tennis Tables</li>
                  <li>Foosball Tables</li>
                  <li>Air Hockey Tables</li>
                  <li>Concrete Products</li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => hoverMouseEnter(8)}
              onMouseLeave={hoverMouseLeave}
            >
              <a href="/Lockers" className="item">
                Lockers
              </a>
            </li>
            <li
              onMouseEnter={() => hoverMouseEnter(9)}
              onMouseLeave={hoverMouseLeave}
            >
              <a href="/Flooring" className="item">
                Flooring
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
