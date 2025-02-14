//* 6️⃣ Emotion (CSS-in-JS like Styled Components)
// Similar to styled-components, but with better performance.
// npm install @emotion/react @emotion/styled

import React, { useState } from "react";
import { css } from "@emotion/react";


const Using_Emotion = () => {

  const [isActive, setIsActive] = useState(false);

  const dynamicStyle = css`
color: ${isActive ? "red" : "blue"};
font-size: 20px;
padding: 10px;
`;

  return (
    <div>
      <h1>Using Emotion</h1>
      <p css={dynamicStyle}>This text changes color dynamically!</p>
      <button onClick={() => setIsActive(!isActive)}>Toggle Color</button>
    </div>
  )
}

export default Using_Emotion

// ✅ Pros: Optimized performance, scoped styles
// ❌ Cons: Slightly different syntax

