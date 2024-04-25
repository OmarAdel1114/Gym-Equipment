import axios from 'axios';
import React, { useRef, useState } from 'react';
import './register.css';
import photo from '../../assets/media/New_Blue Logo Whait_2 (2) (1).webp';

function Register() {
  const [number, setNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    number: '',
    userName: '',
    fullName: '',
    password: '',
  });

  const passwordRef = useRef('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ number: '', userName: '', fullName: '', password: '' });

    if (number < 11) {
      setErrors({ ...errors, number: 'you must type your number' });
      return;
    }
    if (userName.includes(1)) {
      setErrors({ ...errors, number: 'you must type your number' });
      return;
    }

    if (password < 8) {
      setErrors({
        ...errors,
        password: 'your password must be 8 chars or more',
      });
      return;
    }

    try {
      const response = await axios
        .post('https://gym-equipment.vercel.app/api/users/register', {
          number,
          fullName,
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
    console.log('successful but not to server');
  };

  return (
    <div className="register">
      <div className="form-holder">
        <div className="photo-header">
          <img src={photo} alt="" />
        </div>

        <form onSubmit={handleSubmit}>
          <h2 className="Login-heading">Register</h2>
          {/* <label>* Mobile Number</label> */}
          <input
            value={number}
            placeholder="mobile Number"
            type="number"
            onChange={(e) => setNumber(e.target.value)}
          />
          {errors.number && <div className="error-500">{errors.number}</div>}
          {/* <label>* User Name</label> */}
          <input
            value={userName}
            placeholder="UserName"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          {/* <label>Full Name</label> */}
          {errors.userName && (
            <div className="error-500">{errors.userName}</div>
          )}

          <input
            value={fullName}
            placeholder="Full Name"
            type="text"
            onChange={(e) => setFullName(e.target.value)}
          />
          {/* <label>* Password</label> */}
          {errors.fullName && (
            <div className="error-500">{errors.fullName}</div>
          )}

          <input
            placeholder=" Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
          />
          {errors.password && (
            <div className="error-500">{errors.password}</div>
          )}

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
