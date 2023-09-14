import React, { useState } from "react";

// useState Why??  What is state ??
// Hooks useState == Funtion 1) argument (initial state) 2) method (current state, funtion() )
// const state = 0
const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold flex flex-col items-center gap-4 p-3">
          This is a Hook class
        </h1>
        <button onClick={() => setCount(count + 1)} className="btn">
          Add One
        </button>
        This is a Count : {count}
      </div>
    </>
  );
};

export default UseState;
