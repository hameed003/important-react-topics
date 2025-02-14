//* Styling To A React Component Using styled-component-library ( emotion library ):
import React from "react";
import styled from "@emotion/styled";

//* Different Syntax for @emotion/styled:
// 1: if we are applying style on regular HTML tag:
// Syntax: const CustomButton = styled.button``;   OR  const CustomButton = styled('button')``;  both are same.

// 2: if we are applying style on Mui component:
// Syntax: const CustomButton = styled(Button)``;  
// ==============================================

// Create a styled component called CustomButton
const CustomButton = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 20px;
  width: 280px;

  &:hover {
    background-color: ${(props) => (props.primary ? "darkblue" : "darkgray")};
  }
`;

// Component using the CustomButton styled component
function EmotiondButton() {
  return (
    <div>
      {/* we are using $ here because without it we get a prop type warning in the console */}
      <CustomButton primary="true">Primary Button With Emotion Library</CustomButton>
      <CustomButton>Secondary Button With Emotion Library</CustomButton>
    </div>
  );
}

export default EmotiondButton;
