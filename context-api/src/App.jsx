import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import ThemedButton from "./components/ThemedButton";
import AuthButton from "./components/AuthButton";

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Navbar />
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <ThemedButton />
          <AuthButton />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
