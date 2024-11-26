import axios from 'axios';
import React, { useContext, useState } from 'react';
import './register.css';
import photo from '../../assets/media/New_Blue Logo Whait_2 (2) (1).webp';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

function Register() {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState({
    userName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPass: '',
  });
  // const navigate = useNavigate();
  const phoneRegex = /^[+]?(\d{1,4})?[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})$/;


  const { signUp } = useContext(AuthContext);

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
    

    if (phoneNumber.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userName: 'Phone number is required',
      }));
      hasError = true;
    }
    if (!phoneRegex.test(phoneNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userName: 'please write phone number +1-234-567-9101',
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
    if (password !== confirmPass) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPass: 'please write the same password',
      }));
      hasError = true;
    }

    if (hasError) return;

    try {
      // const response = await axios.post(
      //   'https://gym-equipment.vercel.app/api/users/register',
      //   {
      //     userName,
      //     email,
      //     password,
      //   }
      // );
      // if (response.status === 201) {
      // console.log('Registration successful:', response.data);
      // navigate('/dashboard');
      // } else {
      // console.log('Unexpected response status:', response.status);
      // }
      // if (localStorage.getItem(email)) {
      //   console.log('this email is already taken');
      //   hasError = true;
      //   setErrors((prev) => ({
      //     ...prev,
      //     email: 'this email is already taken',
      //   }));
      // } else {
      //   setLoggedIn(true);
      //   const user = { ID: Math.random(), userName, email, password, loggedIn };
      //   localStorage.setItem('user', JSON.stringify(user));
      //   navigate('/home');
      // }
      signUp(email, userName, password, loggedIn);
    } catch (error) {
      if (error.response) {
        console.error('Server Error:', error.response.data);
        setErrors((prevErrors) => ({
          ...prevErrors,
          general: error.response.data.message || 'Server error occurred',
        }));
      } else if (error.request) {
        console.error('Network Error: No response received');
        setErrors((prevErrors) => ({
          ...prevErrors,
          general: 'Network error. Please try again.',
        }));
      } else {
        console.error('Unexpected Error:', error.message);
        setErrors((prevErrors) => ({
          ...prevErrors,
          general: 'Unexpected error occurred. Please try again.',
        }));
      }
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-header">
          <a href="/">
            <p className="register-logo">BlueShell</p>
          </a>
        </div>
        <form onSubmit={handleSubmit} className="register-form">
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
            value={phoneNumber}
            placeholder="Phone number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="register-input"
          />
          {errors.phoneNumber && (
            <div className="register-error">{errors.phoneNumber}</div>
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
          <input
            placeholder="confirm Password"
            value={confirmPass}
            type="password"
            onChange={(e) => setConfirmPass(e.target.value)}
            className="register-input"
          />
          {errors.confirmPass && (
            <div className="register-error">{errors.confirmPass}</div>
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
      <div className="caution">
        * please be inform that this step is not supported by server side
        service and it is for practicing purpose only!
      </div>
    </div>
  );
}

export default Register;
