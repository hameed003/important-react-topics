import React, { createContext, useState, useContext } from "react";

// Step 1: Create the Context
const ThemeContext = createContext();

// Step 2: Create the Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Step 3: Custom Hook to Consume Context (Optional, for cleaner code)
export const useTheme = () => {
  return useContext(ThemeContext);
};
