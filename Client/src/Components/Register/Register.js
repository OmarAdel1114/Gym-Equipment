import axios from 'axios';
import React, { useState } from 'react';
import './register.css';
import photo from '../../assets/media/New_Blue Logo Whait_2 (2) (1).webp';

function Register() {
  const [number, setNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .post('https://gym-equipment.vercel.app/api/users/login', {
          number,
          userName,
          password,
        })
        .then((response) => {
          if (response.status !== 200) {
            console.log('moshkla 200');
          }
        });
      console.log(response);
    } catch (error) {
      console.error('login failed yacta', error);
    }
  };

  return (
    <div>
      <div className="form-holder">
        <div className="photo-header">
          {/* <img src={photo} alt="" /> */}
          <h2 className="Login-heading">Register</h2>
        </div>
        <form onSubmit={handleSubmit}>
            <label>Mobile Number</label>
          <input
            value={number}
            placeholder="mobile Number"
            type="number"
            onChange={(e) => setNumber(e.target.value)}
          />
            <label>User Name</label>
          <input
            value={userName}
            placeholder="UserName"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
            <label>Full Name</label>
          <input
            value={fullName}
            placeholder="Full Name"
            type="text"
            onChange={(e) => setFullName(e.target.value)}
          />
            <label>Password</label>
          <input
            placeholder=" Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
