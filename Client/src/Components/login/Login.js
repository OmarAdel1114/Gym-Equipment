import axios from 'axios';
import React, { useState } from 'react';
import './login.css';
import photo from '../../assets/media/New_Blue Logo Whait_2 (2) (1).webp';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .post('https://gym-equipment.vercel.app/api/users/login', {
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
    <div className="form-holder">
      <div className="photo-header">
        <img src={photo} alt="" />
        <h2 className="Login-heading">Login with your Email</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={userName}
          placeholder="UserName"
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          placeholder=" Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <a href="/Register"> Don't Have an Account ? </a>
      </form>
    </div>
  );
}

export default Login;
