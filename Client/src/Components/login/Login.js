import axios from 'axios';
import React, { useContext, useState } from 'react';
import './login.css';
// import photo from '../../assets/media/New_Blue Logo Whait_2 (2) (1).webp';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

function Login() {
  const [email, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const { login, error } = useContext(AuthContext);

  const userData = JSON.parse(localStorage.getItem('user'));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ email: '', password: '' });

    let hasError = false;

    if (!email.includes('@')) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email must include @',
      }));
      hasError = true;
    }
    if (password.length < 4) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 4 characters',
      }));
      hasError = true;
    }

    if (hasError) return;

    try {
      // const response = await axios.post(
      //   'https://gym-equipment.vercel.app/api/users/login',
      //   {
      //     email,
      //     password,
      //   }
      //   // {
      //   //   withCredentials: true,
      //   // }
      // );

      // authentication request

      // if (response.status === 200) {
      //   console.log('Login successful:', response.data);
      //   // console.log(response);
      //   const token = response.data.data.accessToken;
      //   const userId = response.data.data.user._id;
      //   console.log(userId);

      // handleLogin(token, userId);
      // Navigate to the dashboard or another appropriate route
      // to get the access token from the request and put it in the local storage
      // try to push a request with the token

      // in the cart for example , make ssure to put in header -> the authorization : Bearer ${token}
      // } else {
      login(email, password);
    } catch (error) {
      // }
      // console.error('Login failed:', error);
      setErrors((prevErrors) => ({
        ...prevErrors,
        general: 'Login failed. Please try again.',
      }));
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <a href="/">
            <p className="login-logo">BlueShell</p>
          </a>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
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
          {errors.password && (
            <div className="login-error">{errors.password}</div>
          )}
          {errors.general && (
            <div className="login-error">{errors.general}</div>
          )}
          {error && (
            <div className="login-error">{error}</div>
          )}

          <button className="login-button">Log in</button>
          <p className="login-link">
            <a href="/accounts/password">Forget Password?</a>
          </p>
          <div className="login-link">
            <p>Don't have an account? </p>
            <a href="/register">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
