import React, { useState } from "react";
import "./styles.css"; // Import CSS file

const Using_CSS_Classes = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <h1>Using CSS Classes</h1>
      <div className={isDark ? "dark-mode" : "light-mode"}>
        <p>This background changes dynamically!</p>
        <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
      </div>
    </>
  )
}

export default Using_CSS_Classes

//✅ Pros: Supports pseudo-classes (:hover, :focus)

// ❌ Cons: Need a separate CSS file