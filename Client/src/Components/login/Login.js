import axios from 'axios';
import React, { useState } from 'react';
import './login.css';
// import photo from '../../assets/media/New_Blue Logo Whait_2 (2) (1).webp';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ email: '', password: '' });

    let hasError = false;

    if (!email.includes('@')) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Email must include @' }));
      hasError = true;
    }
    if (password.length < 4) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be at least 4 characters' }));
      hasError = true;
    }

    if (hasError) return;

    try {
      const response = await axios.post('https://gym-equipment.vercel.app/api/users/login', {
        email,
        password,
      }, {
        withCredentials: true
      });

      // authentication request
      // 

      if (response.status === 200) {
        console.log('Login successful:', response.data);
        console.log(response)
        const token = response.data.data.accessToken
        localStorage.setItem( "accessToken", token)
        // to get the access token from the request and put it in the local storage 
        // try to push a request with the token 

        // in the cart for example , make ssure to put in header -> the authorization : Bearer ${token}
        console.log(token)
        navigate('/home'); // Navigate to the dashboard or another appropriate route
      } else {
        console.log('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.error('Login failed:', error);
      setErrors((prevErrors) => ({ ...prevErrors, general: 'Login failed. Please try again.' }));
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <a href='/'><p className='login-logo'>BlueShell</p></a>
          {/* <img src={photo} alt="Logo" className="login-logo" /> */}
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          {/* <h2 className="login-heading">Login</h2> */}

          <input
            value={email}
            placeholder="username, or email"
            type="email"
            onChange={(e) => setUserName(e.target.value)}
            className="login-input"
          />
          {errors.email && <div className="login-error">{errors.email}</div>}

          <input
            placeholder="Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          {errors.password && <div className="login-error">{errors.password}</div>}
          {errors.general && <div className="login-error">{errors.general}</div>}
          
          <button type="submit" className="login-button">Log in</button>
          <p className="login-link">
            <a href="/accounts/password">Forget Password?</a>
          </p>
          <p className="login-link">
            <p>Don't have an account? </p>
            <a href="/register">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
