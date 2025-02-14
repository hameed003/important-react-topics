import React, { useState } from "react";
import styles from "./CSSModule.module.css"; // Import module CSS

//* 3️⃣ CSS Modules

// For scoped styles, we use CSS Modules.
const Using_CSS_Modules = () => {
  const [isSuccess, setIsSuccess] = useState(true);

  return (
    <>
      <h1>Using CSS Modules</h1>
      <div className={isSuccess ? styles.success : styles.error}>
        Message: {isSuccess ? "Success" : "Error"}
        <button onClick={() => setIsSuccess(!isSuccess)}>Toggle</button>
      </div>
    </>
  )
}

export default Using_CSS_Modules
