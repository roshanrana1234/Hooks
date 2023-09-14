import React, { useState } from "react";

const UseCount = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Count
      </button>
      Current Value : {count}
    </>
  );
};

export default UseCount;

// Hooks useState
