import React, { createContext, useState, useEffect } from 'react';
// import jwtDecode from 'jwt-decode';

// Create the AuthContext
export const AuthContext = createContext({  });

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);

//   const getUserIdFromToken = (token) => {
//     const decodedToken = jwtDecode(token);
//     return decodedToken.userId; 
//   }

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    // const userIdGen = getUserIdFromToken(token)
    // console.log(`user id from token ${userIdGen}`)
    
    const storedUserId = localStorage.getItem('userId');
    console.log(token);
    if (token && storedUserId) {
      setIsAuthenticated(true);
      setUserId(storedUserId);
    }
  }, []);

  const login = (token, userId) => {
    localStorage.setItem('accessToken', token);
    localStorage.setItem('userId', userId);
    setIsAuthenticated(true);
    setUserId(userId);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    setIsAuthenticated(false);
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Export AuthProvider and AuthContext
export default AuthProvider;
