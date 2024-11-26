import React, { useContext } from 'react';
import './profile.css';
import { AuthContext } from '../AuthContext';
import { json } from 'react-router-dom';
import Nav from '../nav/Nav';

const Profile = () => {
  const { loggedIn, login, logout } = useContext(AuthContext);

  const userData = JSON.parse(localStorage.getItem('user'));
  console.log(userData);
  return (
    <>
      <Nav />
      <h1 id="profile-heading">Profile</h1>
      <div className="proflie-container">
        <section>
          <div className="line">
            <div className="key">Name</div>{' '}
            <div className="value">{userData.userName}</div>
          </div>
          <div className="line">
            <div className="key">Email</div>{' '}
            <div className="value">{userData.name}</div>
          </div>
          <div className="line">
            <div className="key">Password</div>{' '}
            <div className="value">{userData.name}</div>
          </div>
          <div className="line">
            <div className="key">phone</div>{' '}
            <div className="value">{userData.phone}</div>
          </div>
        </section>
        <section>
          <div className="line">
            <div className="key">Adress</div>{' '}
            <div className="value">{userData.userName}</div>
          </div>
          <div className="line">
            <div className="key">Payment</div>{' '}
            <div className="value">{userData.name}</div>
          </div>
          <div className="line">
            <div className="key">Orders</div>{' '}
            <div className="value">{userData.name}</div>
          </div>
          <div className="line">
            <div className="key">signout</div>{' '}
            <div className="value">{userData.phone}</div>
          </div>
        </section>
        <button className="profile-logout-btn" onClick={logout}>
          Sign Out
        </button>
      </div>
    </>
  );
};

export default Profile;
