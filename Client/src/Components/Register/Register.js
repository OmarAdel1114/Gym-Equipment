import axios from 'axios';
import React, { useState } from 'react';
import './register.css';
import photo from '../../assets/media/New_Blue Logo Whait_2 (2) (1).webp';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ userName: '', email: '', password: '' });

    let hasError = false;

    if (userName.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userName: 'Username is required',
      }));
      hasError = true;
    }
    if (!email.includes('@')) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email must include @',
      }));
      hasError = true;
    }
    if (password.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 8 characters',
      }));
      hasError = true;
    }

    if (hasError) return;

    try {
      const response = await axios.post(
        'https://gym-equipment.vercel.app/api/users/register',
        {
          userName,
          email,
          password,
        }
      );

      if (response.status === 200) {
        console.log('Registration successful:', response.data);
        navigate('/dashboard'); // Navigate to the dashboard or another appropriate route
      } else {
        console.log('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setErrors((prevErrors) => ({
        ...prevErrors,
        general: 'Registration failed. Please try again.',
      }));
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-header">
          <p className="register-logo">BlueShell</p>
          {/* <img src={photo} alt="Logo" className="register-logo" /> */}
        </div>
        <form onSubmit={handleSubmit} className="register-form">
          {/* <h2 className="register-heading">Register</h2> */}

          <input
            value={userName}
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
            className="register-input"
          />
          {errors.userName && (
            <div className="register-error">{errors.userName}</div>
          )}

          <input
            value={email}
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="register-input"
          />
          {errors.email && <div className="register-error">{errors.email}</div>}

          <input
            placeholder="Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="register-input"
          />
          {errors.password && (
            <div className="register-error">{errors.password}</div>
          )}
          {errors.general && (
            <div className="register-error">{errors.general}</div>
          )}

          <button type="submit" className="register-button">
            Sign up
          </button>
          <p className="register-link">
            <p>Already have an account? </p>
            <a href="/login">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
