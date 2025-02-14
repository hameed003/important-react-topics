import React, { useState } from "react";

//*  1️⃣ Inline Styles (Style Attribute)

// React allows you to pass a style object to the style attribute.
const Using_Inline_Style = () => {
  const [isActive, setIsActive] = useState(false);

  const styles = {
    color: isActive ? "red" : "blue",
    fontSize: "20px",
    padding: "10px",
  };

  return (
    <div>
      <h1>Using Inline Style</h1>
      <p style={styles}>This text changes color dynamically!</p>
      <button onClick={() => setIsActive(!isActive)}>Toggle Color</button>
    </div>
  );
};

export default Using_Inline_Style

// ✅ Pros: Simple, dynamic
// ❌ Cons: Less maintainable, no pseudo-classes (:hover, :focus, etc.)