import axios from 'axios';
import React, { useState } from 'react';
import './login.css';
import photo from '../../assets/media/New_Blue Logo Whait_2 (2) (1).webp';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ email: '', password: '' });

    if (!userName.includes('@')) {
      setErrors({...errors, email: "email must include @"})
      return
    }
    if (password < 8) {
      setErrors({...errors, password: "password must be at least 8 chars"})
      return
    }

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

  const Validation = () => {};

  return (
    <div className="form-holder">
      <div className="photo-header">
        <img src={photo} alt="" />
      </div>
      <form onSubmit={handleSubmit}>
        <h2 className="Login-heading">Login</h2>

        <input
          value={userName}
          placeholder="email"
          type="mail"
          onChange={(e) => setUserName(e.target.value)}
        />
        {errors.email && <div className="error-500">{errors.email}</div>}

        <input
          placeholder=" Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div className="error-500">{errors.password}</div>}
        <p>
          {' '}
          <a href="/accounts/password"> Forget Password? </a>
        </p>
        <button type="submit">Login</button>
        <a href="/Register"> Don't Have an Account ? </a>
      </form>
    </div>
  );
}

export default Login;
