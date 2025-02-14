import React from "react";
import { useAuth } from "../context/AuthContext";

const AuthButton = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <button
      onClick={isAuthenticated ? logout : login}
      style={{
        padding: "10px 20px",
        margin: "10px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: isAuthenticated ? "#d9534f" : "#5cb85c",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      {isAuthenticated ? "Logout" : "Login"}
    </button>
  );
};

export default AuthButton;
