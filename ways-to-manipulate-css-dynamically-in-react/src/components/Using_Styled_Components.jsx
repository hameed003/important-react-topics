//* 4️⃣ Styled Components (CSS-in-JS)
// A popular way using styled-components library.
// npm install styled-components

import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const Using_Styled_Components = () => {
  const [primary, setPrimary] = useState(false);

  return (
    <>
      <h1>Using Styled Components</h1>
      <div>
        <Button primary={primary}>Styled Button</Button>
        <button onClick={() => setPrimary(!primary)}>Toggle Style</button>
      </div>
    </>
  )
}

export default Using_Styled_Components

// ✅ Pros: Supports props, pseudo-classes, global styles
// ❌ Cons: Requires additional dependency