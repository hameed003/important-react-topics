# What is Declarative UI / Declarative Programming ?

Declarative programming is a programming paradigm where you describe what you want to achieve rather than **how** to achieve it.

In **Declarative UI**, you define the structure and behavior of the UI based on the current state, and the framework (like React) handles rendering the changes automatically.

## Declarative vs Imperative Programming

| Feature           | Declarative Programming                         | Imperative Programming                            |
| ----------------- | ----------------------------------------------- | ------------------------------------------------- |
| Approach          | Describes what should happen                    | Specifies how things should happen step by step   |
| Code Style        | More readable, shorter, and maintainable        | More detailed and procedural                      |
| State Handling    | UI updates automatically based on state changes | You manually update the UI when the state changes |
| Example Languages | React, SQL, HTML, CSS                           | JavaScript (Vanilla), C, Java                     |

## Example 1: Updating the UI (Declarative vs Imperative in React vs Vanilla JS)

### 🚫 Imperative Approach (Vanilla JavaScript)

Here, we manually update the UI whenever the button is clicked.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Imperative UI</title>
  </head>
  <body>
    <p id="text">Count: 0</p>
    <button id="increment">Increment</button>

    <script>
      let count = 0;
      document.getElementById("increment").addEventListener("click", () => {
        count++;
        document.getElementById("text").textContent = `Count: ${count}`;
      });
    </script>
  </body>
</html>
```

**👉 Problem:**

- We manually find and update the DOM (`document.getElementById("text")`).
- More code is needed to handle updates, making it error-prone.

### ✅ Declarative Approach (React)

In React, we describe **what the UI should look like** based on the state. React automatically updates the UI when the state changes.

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

**👉 Why Declarative is Better?**

- **No manual DOM updates:** React updates the UI automatically when `count` changes.
- **Cleaner code:** The logic is easier to read and maintain.
- **Fewer bugs:** No need to track DOM changes manually.

## Example 2: Styling (CSS vs JavaScript)

Declarative styling describes what styles should apply, while imperative styling applies styles step by step.

### 🚫 Imperative (JavaScript Style Manipulation)

```js
const button = document.getElementById("btn");
button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.borderRadius = "5px";
```

### ✅ Declarative (CSS)

```css
button {
  background-color: blue;
  color: white;
  border-radius: 5px;
}
```

**👉 Why Declarative is Better?**

- The styles are defined separately and automatically apply to elements that match.
- Easier to read, maintain, and reuse.

## Example 3: UI Logic with React

### 🚫 Imperative Approach (Manually Managing UI)

```js
function showLogin(userLoggedIn) {
  const loginButton = document.getElementById("loginButton");
  const logoutButton = document.getElementById("logoutButton");

  if (userLoggedIn) {
    loginButton.style.display = "none";
    logoutButton.style.display = "block";
  } else {
    loginButton.style.display = "block";
    logoutButton.style.display = "none";
  }
}
```

### ✅ Declarative Approach (React)

```jsx
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
}
```

**👉 Why Declarative is Better?**

- No need to manually update elements (`loginButton.style.display = "none"`).
- UI updates automatically when `isLoggedIn` state changes.

## When to Use Declarative UI?

✅ **React, Angular, Vue.js** – Use declarative programming for UI updates.

✅ **State Management** – Using hooks like `useState`, `useEffect`, and `useContext` in React ensures state-driven UI.

✅ **CSS (Instead of JavaScript styles)** – Avoid manually setting styles in JavaScript.

✅ **SQL Queries** – SQL (`SELECT * FROM users WHERE age > 18`) is declarative, while procedural data fetching is imperative.

## Conclusion

🚀 **Declarative UI** focuses on **what the UI should be rather than how it should be updated.** React follows this paradigm by using **state-driven rendering**, eliminating the need for direct DOM manipulation.

### **Declarative UI is:**

✅ **Easier to Read & Maintain**

✅ **Less Error-Prone**

✅ **More Scalable for Large Apps**

This approach makes modern web development **faster, cleaner, and more efficient!**
