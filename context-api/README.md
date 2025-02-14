The **React Context API** is used for sharing data (like theme, user info, or preferences) across components without having to pass props manually at every level. Over time, React introduced new ways to interact with the Context API, transitioning from class-based components to functional components with hooks.

Here’s a detailed explanation of the **new way** (functional components with hooks) of using the Context API.

---

### **Project Structure**

Here’s how you can structure your files:

```
src
│
├── context
│   ├── ThemeContext.js   // Theme-related context & provider
│   └── AuthContext.js    // Authentication-related context & provider
│
├── components
│   ├── Navbar.js         // Navbar component consuming both contexts
│   ├── ThemedButton.js   // A button for toggling the theme
│   └── AuthButton.js     // A button for login/logout
│
├── App.js                // Main App
└── index.js              // Entry point

```

---

### **Step 1: Create a Context `ThemeContext` in a Separate File**

**`context/ThemeContext.js`**

```jsx
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
```

---

### **Create another Context the `AuthContext`**

**`context/AuthContext.js`**

```jsx
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
```

---

### **Step 2: Create Components to Consume Both Contexts**

**`components/Navbar.js`**

#### **`components/Navbar.js`**

This **`Navbar`** component will consume both `ThemeContext` and `AuthContext`.

```jsx
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
```

---

**`components/ThemedButton.js`**

This **`Button`** component will consume the context using the `useTheme` hook from the `ThemeContext`.

```jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemedButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Toggle Theme (Current: {theme})
    </button>
  );
};

export default ThemedButton;
```

---

**`components/AuthButton.js`**

This **`Button`** component will allow the user to log in or log out by consuming the `AuthContext`.

```jsx
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
```

---

### **Step 3: Use the Context in the App**

**`App.js`**

Wrap both providers ( `ThemeProvider` and `AuthProvider` ) around your app. This allows components to access both contexts.

```jsx
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
```

---

### **Step 4: Render the App**

**`index.js`**

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

---

### **Explanation**

1. **Separation of Concerns:**

   - The **`AuthContext.js`** and **`ThemeContext.js`** file is responsible for managing the context logic ( creation, provider, and custom hooks ).

   - The components ( **`Navbar.js`** , **`ThemedButton.js`**, **`AuthButton`** ) are only concerned with consuming the context.

2. **Custom Hook (`useTheme` and `useAuth`):**

   - This makes consuming the context easier and cleaner in functional components. Instead of calling **`useContext(ThemeContext)`** and **`useContext(AuthContext)`** everywhere, you can just call **`useTheme()`** and **`useAuth()`**.

3. **Global State Management:**

   - By wrapping the **`ThemeProvider`** and **`AuthProvider`** around the app, all child components can access and update the shared state ( `theme` and `auth` in this case ).

4. **Scalability:**
   - If you need more contexts ( e.g., **`LanguageContext`** ), you can create separate files for them, making the app modular and maintainable.

---

### **How the App Works Now**

1. **Navbar Component:**

   - Displays the current theme ( via **`ThemeContext`** ).

   - Displays whether the user is logged in or logged out ( via **`AuthContext`** ).

2. **ThemedButton Component:**

   - Toggles between light and dark themes.

3. **AuthButton Component:**

   - Allows the user to log in or log out.

   - The button text and color change based on the login state.

---

### **Advantages of This Approach**

- **Separation of Concerns:**

  - `ThemeContext` is responsible for theme management.

  - `AuthContext` is responsible for authentication.

- **Clean Code Structure:** All context logic is centralized in one file.

- **Reusability:** You can reuse the **`ThemeContext`** and **`AuthContext`** in multiple components without repeating code.

- **Scalable for Large Apps:** Multiple contexts can be handled similarly for separate concerns like authentication, themes, and languages.

This pattern is widely used in production environments for organized and scalable React apps.

---

### **Output Example**

1. Initially, the app shows:

   - A light theme.

   - A navbar that says "Please log in."

   - A login button.

2. Clicking the login button changes:

   - Navbar text to "Welcome, User!"

   - Button text to "Logout."

3. Clicking the toggle theme button switches between light and dark themes.

This approach is **production-ready**, modular, and follows the best practices for managing state and context in React applications.
