//* Styling To A React Component Using styled-component-librarys ( styled-component library ):

import React from "react";
import styled from "styled-components";

//* Different Syntax for styled-component:
// 1: if we are applying style on regular HTML tag:
// Syntax: const CustomButton = styled.button``;   OR  const CustomButton = styled('button')``;  both are same.

// 2: if we are applying style on Mui component:
// Syntax: const CustomButton = styled(Button)``;  
// ==============================================

// Define a styled component with conditional styles
const Button = styled.button`
  background-color: ${(props) => (props.primary ? "green" : "gray")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  margin: 20px;

  &:hover {
    background-color: ${(props) => (props.primary ? "darkgreen" : "darkgray")};
  }
`;

// Component using the Button styled component
function StyledComponent() {
  return (
    <div>

      {/* we are using $ here because without it we get a prop type warning in the console */}
      <Button primary="true">Primary Button With Sttyled Component</Button>
      <Button>Secondary Button With Sttyled Component</Button>
    </div>
  );
}

export default StyledComponent;


