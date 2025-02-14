import React, { createContext, useContext, useState } from "react";

// Step 1: Create the Context
const AuthContext = createContext();

// Step 2: Create the Provider Component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Step 3: Custom Hook to Consume the Context
export const useAuth = () => {
  return useContext(AuthContext);
};
