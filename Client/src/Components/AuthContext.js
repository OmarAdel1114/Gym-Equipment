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
    }
  }, []);

  // Login function
  const login = (token, userId) => {
    // navigate('/login')
    localStorage.setItem('accessToken', token);
    localStorage.setItem('userId', userId);
    setIsAuthenticated(true);
    setUserId(userId);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    setIsAuthenticated(false);
    setUserId(null);


    setLoggedIn(false); // Set loggedIn to false here
    console.log('logging status from logout:', loggedIn);
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
      const user = { ID: Math.random(), userName, email, password, loggedIn: true };
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
