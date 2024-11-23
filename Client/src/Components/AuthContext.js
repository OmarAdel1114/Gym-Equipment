import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Create the AuthContext
export const AuthContext = createContext({});

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); // Track login status here
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  // UseEffect to check if the user is authenticated from localStorage
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const storedUserId = localStorage.getItem('userId');

    if (token && storedUserId) {
      setIsAuthenticated(true);
      setUserId(storedUserId);
      setLoggedIn(true); // Ensure loggedIn is updated
    }
  }, []);

  // Login function
  const login = (email, password) => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (
      userData &&
      userData.email === email &&
      userData.password === password
    ) {
      setLoggedIn(true);
      localStorage.setItem('accessToken', 'dummy-token'); // Set a dummy token
      localStorage.setItem('userId', userData.ID);
      setIsAuthenticated(true);
      setUserId(userData.ID);
      navigate('/'); // Navigate to the home page after login
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        general: 'Invalid email or password.',
      }));
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    setIsAuthenticated(false);
    setUserId(null);
    setLoggedIn(false); // Set loggedIn to false here
    navigate('/'); // Navigate to the home page
  };

  // SignUp function
  const signUp = (email, userName, password) => {
    if (localStorage.getItem(email)) {
      setErrors((prev) => ({
        ...prev,
        email: 'This email is already taken',
      }));
    } else {
      const user = { ID: Math.random(), userName, email, password };
      localStorage.setItem('user', JSON.stringify(user));
      setLoggedIn(true); // Set loggedIn to true here
      navigate('/'); // Navigate after sign-up
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userId,
        login,
        logout,
        signUp,
        loggedIn,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
