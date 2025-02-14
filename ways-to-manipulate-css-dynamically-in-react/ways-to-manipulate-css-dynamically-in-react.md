# Ways to manipulate CSS dynamically in React.js:

In React.js, we can dynamically manipulate CSS in multiple ways. Below are all the possible approaches with proper examples:

---

# A: Using `useState()` hook

## 1️⃣ **Inline Styles (Style Attribute)**

React allows you to pass a style object to the `style` attribute.

### ✅ Example:

```jsx
import React, { useState } from "react";

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const styles = {
    color: isActive ? "red" : "blue",
    fontSize: "20px",
    padding: "10px",
  };

  return (
    <div>
      <p style={styles}>This text changes color dynamically!</p>
      <button onClick={() => setIsActive(!isActive)}>Toggle Color</button>
    </div>
  );
};

export default App;
```

✅ **Pros**: Simple, dynamic  
❌ **Cons**: Less maintainable, no pseudo-classes (`:hover`, `:focus`, etc.)

---

## 2️⃣ **CSS Classes (ClassName Binding)**

We can toggle class names dynamically using the `className` attribute.

### ✅ Example:

```jsx
import React, { useState } from "react";
import "./styles.css"; // Import CSS file

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark-mode" : "light-mode"}>
      <p>This background changes dynamically!</p>
      <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
    </div>
  );
};

export default App;
```

### `styles.css`

```css
.dark-mode {
  background-color: black;
  color: white;
}

.light-mode {
  background-color: white;
  color: black;
}
```

✅ **Pros**: Supports pseudo-classes (`:hover`, `:focus`)  
❌ **Cons**: Need a separate CSS file

---

## 3️⃣ **CSS Modules**

For scoped styles, we use **CSS Modules**.

### ✅ Example:

Create a file `App.module.css`

```css
.success {
  color: green;
}

.error {
  color: red;
}
```

Then use it in `App.js`:

```jsx
import React, { useState } from "react";
import styles from "./App.module.css"; // Import module CSS

const App = () => {
  const [isSuccess, setIsSuccess] = useState(true);

  return (
    <div className={isSuccess ? styles.success : styles.error}>
      Message: {isSuccess ? "Success" : "Error"}
      <button onClick={() => setIsSuccess(!isSuccess)}>Toggle</button>
    </div>
  );
};

export default App;
```

✅ **Pros**: Scoped styles, avoids conflicts  
❌ **Cons**: Slightly complex for large projects

---

## 4️⃣ **Styled Components (CSS-in-JS)**

A popular way using `styled-components` library.

### ✅ Install:

```bash
npm install styled-components
```

### ✅ Example:

```jsx
import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const App = () => {
  const [primary, setPrimary] = useState(false);

  return (
    <div>
      <Button primary={primary}>Styled Button</Button>
      <button onClick={() => setPrimary(!primary)}>Toggle Style</button>
    </div>
  );
};

export default App;
```

✅ **Pros**: Supports props, pseudo-classes, global styles  
❌ **Cons**: Requires additional dependency

---

## 5️⃣ **Tailwind CSS (Utility-First CSS)**

With Tailwind, we can dynamically apply utility classes.

### ✅ Install:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Then configure `tailwind.config.js` and import styles in `index.css`.

### ✅ Example:

```jsx
import React, { useState } from "react";

const App = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <p
        className={`${isActive ? "bg-green-500" : "bg-gray-200"} text-blue-500`}
      >
        Tailwind Dynamic Text
      </p>
      <button
        onClick={() => setIsActive(!isActive)}
        className=" border-2 mt-[5px] p-2"
      >
        Toggle Size
      </button>
    </div>
  );
};

export default App;
```

✅ **Pros**: No separate CSS files, highly flexible  
❌ **Cons**: Needs Tailwind setup

---

## 6️⃣ **Emotion (CSS-in-JS like Styled Components)**

Similar to `styled-components`, but with better performance.

### ✅ Install:

```bash
npm install @emotion/react @emotion/styled
```

### ✅ Example:

```jsx
import React, { useState } from "react";
import { css } from "@emotion/react";

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const dynamicStyle = css`
    color: ${isActive ? "red" : "blue"};
    font-size: 20px;
    padding: 10px;
  `;

  return (
    <div>
      <p css={dynamicStyle}>This text changes color dynamically!</p>
      <button onClick={() => setIsActive(!isActive)}>Toggle Color</button>
    </div>
  );
};

export default App;
```

✅ **Pros**: Optimized performance, scoped styles  
❌ **Cons**: Slightly different syntax

---

## 🎯 **Conclusion**

| Method                | Pros                                | Cons                      |
| --------------------- | ----------------------------------- | ------------------------- |
| **Inline Styles**     | Simple, easy to implement           | No pseudo-classes         |
| **CSS Classes**       | Supports pseudo-classes             | Requires separate file    |
| **CSS Modules**       | Scoped styles                       | Slightly complex          |
| **Styled Components** | Dynamically styled, supports themes | Requires extra dependency |
| **Tailwind CSS**      | Utility-first, no separate files    | Requires setup            |
| **Emotion**           | High performance, supports themes   | Different syntax          |

👉 **Best Choice** depends on project needs:

- **Simple projects?** Use `className` or `inline styles`
- **Scoped styles?** Use **CSS Modules**
- **Component-based styling?** Use **Styled Components** or **Emotion**
- **Utility-first?** Use **Tailwind CSS**

Let me know if you need any explanation! 🚀

---

# B: Using `useRef()` hook

We can also manipulate CSS dynamically in React using `useRef()`. The `useRef()` hook allows direct manipulation of the DOM, making it useful for dynamically changing styles without causing re-renders.

---

## ✅ **Example: Changing Styles with `useRef()`**

```jsx
import React, { useRef } from "react";

const App = () => {
  const divRef = useRef(null);

  const changeStyle = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = "lightblue";
      divRef.current.style.color = "white";
      divRef.current.style.padding = "20px";
      divRef.current.style.borderRadius = "10px";
    }
  };

  return (
    <div>
      <div ref={divRef} style={{ padding: "10px", border: "1px solid black" }}>
        Click the button to change my style!
      </div>
      <button onClick={changeStyle}>Change Style</button>
    </div>
  );
};

export default App;
```

### 🔹 **How It Works**

1. We create a `ref` using `useRef()`.
2. Attach it to a `div` using `ref={divRef}`.
3. When the button is clicked, the `changeStyle` function modifies the CSS of the referenced element directly.

---

## ✅ **Example: Adding & Removing CSS Classes with `useRef()`**

```jsx
import React, { useRef } from "react";
import "./styles.css"; // Import external CSS

const App = () => {
  const boxRef = useRef(null);

  const toggleClass = () => {
    if (boxRef.current) {
      boxRef.current.classList.toggle("active");
    }
  };

  return (
    <div>
      <div ref={boxRef} className="box">
        This box changes color!
      </div>
      <button onClick={toggleClass}>Toggle Class</button>
    </div>
  );
};

export default App;
```

### `styles.css`

```css
.box {
  width: 200px;
  height: 100px;
  background-color: gray;
  color: white;
  text-align: center;
  line-height: 100px;
}

.active {
  background-color: green;
  color: yellow;
}
```

### 🔹 **How It Works**

- Clicking the button toggles the `active` class on the `div`.
- This changes the background color dynamically.

---

## 🎯 **When to Use `useRef()` for Styling**

✅ **Use `useRef()` when:**

- You need to modify styles **without causing re-renders**.
- You want **direct DOM manipulation**, like animations or transitions.

❌ **Avoid `useRef()` when:**

- You can achieve the same result with **state (`useState`) and `className`**.
- You need styles that should update based on re-renders.

Let me know if you need more clarification! 🚀
