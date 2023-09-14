import React, { useState } from "react";

const UseStateTwo = () => {
  const initialCondition = 0;
  const [count, setCount] = useState(initialCondition);

  const increasByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((preValue) => preValue + 1);
    }
  };

  return (
    <>
      <div>Our Count : {count}</div>
      <button
        onClick={() => setCount(initialCondition)}
        className="btn bg-blue-500"
      >
        Reset
      </button>
      <button
        onClick={() => setCount((preCount) => preCount + 1)}
        className="btn bg-green-500"
      >
        Increate One
      </button>
      <button
        onClick={() => setCount((preCount) => preCount - 1)}
        className="btn bg-red-500"
      >
        Decreate One
      </button>
      <button onClick={increasByFive} className="btn bg-red-500">
        Increate 5
      </button>
    </>
  );
};

export default UseStateTwo;
