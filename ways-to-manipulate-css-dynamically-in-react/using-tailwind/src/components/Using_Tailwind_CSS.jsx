//* 5️⃣ Tailwind CSS (Utility-First CSS)
// With Tailwind, we can dynamically apply utility classes.

import React, { useState } from "react";

const Using_Tailwind_CSS = () => {

  const [isActive, setIsActive] = useState(false);
  console.log(isActive)
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Using Tailwind CSS</h1>
      <p className={`${isActive ? 'bg-green-500' : 'bg-gray-200'} text-blue-500`}>
        Tailwind Dynamic Text
      </p>
      <button onClick={() => setIsActive(!isActive)} className=" border-2 mt-[5px] p-2">Toggle Size</button>
    </div>
  )
}

export default Using_Tailwind_CSS

// ✅ Pros: No separate CSS files, highly flexible
// ❌ Cons: Needs Tailwind setup

