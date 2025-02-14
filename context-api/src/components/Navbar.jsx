import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { theme } = useTheme();
  const { isAuthenticated } = useAuth();

  return (
    <nav
      style={{
        backgroundColor: theme === "light" ? "#f4f4f4" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <h1>My Themed App</h1>
      <p>{isAuthenticated ? "Welcome, User!" : "Please log in."}</p>
    </nav>
  );
};

export default Navbar;
