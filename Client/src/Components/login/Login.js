import axios from 'axios';
import React, { useState } from 'react';
import './login.css';
import photo from "../../assets/media/New_Blue Logo Whait_2 (2) (1).webp"

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://gym-equipment.vercel.app/api/users/login',
        { userName, password }
      );
      console.log(response);
    } catch (error) {
      console.error('login failed', error);
    }
  };

  return (
    <div className='form-holder'>
       <div className='photo-header'>
        <h2 className='Login-heading'>
            Login with your Email
        </h2>
        <img src={photo} alt=''/>
       </div>
      <form onSubmit={handleSubmit}>
        <label>UserName</label>
        <input
          value={userName}
          placeholder='Enter your Name'
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label>password</label>
        <input
            placeholder='Enter your Password'
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
        <a href='/Register'> Don't Have an Account ? </a>
      </form>
    </div>
  );
}

export default Login;
